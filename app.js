class FileSystem {
    constructor() {
        this.currentPath = '/home/user';
        this.fs = {
            '/': {
                type: 'dir',
                contents: {
                    'home': {
                        type: 'dir',
                        contents: {
                            'user': {
                                type: 'dir',
                                contents: {
                                    'documents': {
                                        type: 'dir',
                                        contents: {
                                            'readme.txt': { type: 'file', content: 'Welcome to Linux command practice!' }
                                        }
                                    },
                                    'hello.txt': { type: 'file', content: 'Hello, World!' }
                                }
                            }
                        }
                    },
                    'etc': {
                        type: 'dir',
                        contents: {
                            'hosts': { type: 'file', content: '127.0.0.1 localhost' }
                        }
                    }
                }
            }
        };
    }

    resolvePath(path) {
        if (path.startsWith('/')) {
            return path;
        }
        if (path === '~') {
            return '/home/user';
        }
        if (path.startsWith('~/')) {
            return '/home/user' + path.slice(1);
        }
        if (path === '.') {
            return this.currentPath;
        }
        if (path === '..') {
            const parts = this.currentPath.split('/').filter(p => p);
            parts.pop();
            return '/' + parts.join('/');
        }
        return this.currentPath + (this.currentPath === '/' ? '' : '/') + path;
    }

    getNode(path) {
        const parts = path.split('/').filter(p => p);
        let node = this.fs['/'];
        
        for (const part of parts) {
            if (!node.contents || !node.contents[part]) {
                return null;
            }
            node = node.contents[part];
        }
        return node;
    }

    getCurrentDir() {
        return this.getNode(this.currentPath);
    }
}

class Terminal {
    constructor() {
        console.log('Terminal constructor starting...');
        this.fs = new FileSystem();
        this.output = document.getElementById('output');
        this.input = document.getElementById('command-input');
        
        if (!this.output || !this.input) {
            console.error('Terminal elements not found!', {
                output: this.output,
                input: this.input
            });
        }
        
        this.history = [];
        this.historyIndex = -1;
        this.currentWorkshop = null;
        this.currentStep = 0;
        this.currentHintIndex = 0;
        this.completedSteps = new Set();
        
        console.log('Terminal constructor finished');
        
        console.log('Setting up commands...');
        try {
            this.commands = {
                ls: this.ls.bind(this),
            pwd: this.pwd.bind(this),
            cd: this.cd.bind(this),
            cat: this.cat.bind(this),
            mkdir: this.mkdir.bind(this),
            touch: this.touch.bind(this),
            echo: this.echo.bind(this),
            clear: this.clear.bind(this),
            help: this.help.bind(this),
            chmod: this.chmod.bind(this),
            ps: this.ps.bind(this),
            systemctl: this.systemctl.bind(this),
            top: this.top.bind(this),
            df: this.df.bind(this),
            free: this.free.bind(this),
            uptime: this.uptime.bind(this),
            crontab: this.crontab.bind(this),
            at: this.at.bind(this),
            journalctl: this.journalctl.bind(this),
            grep: this.grep.bind(this),
            tail: this.tail.bind(this),
            sudo: this.sudo.bind(this),
            apt: this.apt.bind(this),
            ping: this.ping.bind(this),
            netstat: this.netstat.bind(this),
            lsof: this.lsof.bind(this),
            man: this.man.bind(this),
            wc: this.wc.bind(this),
            mv: this.mv.bind(this),
            cp: this.cp.bind(this),
            rm: this.rm.bind(this),
            rmdir: this.rmdir.bind(this),
            id: this.id.bind(this),
            whoami: this.whoami.bind(this),
            groups: this.groups.bind(this),
            lsblk: this.lsblk.bind(this),
            mount: this.mount.bind(this),
            du: this.du.bind(this),
            curl: this.curl.bind(this),
            wget: this.wget.bind(this),
            dig: this.dig.bind(this),
            nano: this.nano.bind(this),
            vi: this.vi.bind(this),
            vim: this.vim.bind(this),
            sed: this.sed.bind(this),
            awk: this.awk.bind(this),
            cut: this.cut.bind(this),
            sort: this.sort.bind(this),
            uniq: this.uniq.bind(this),
            find: this.find.bind(this),
            locate: this.locate.bind(this),
            which: this.which.bind(this),
            whereis: this.whereis.bind(this),
            file: this.file.bind(this),
            head: this.head.bind(this),
            less: this.less.bind(this),
            more: this.more.bind(this),
            ln: this.ln.bind(this),
            chown: this.chown.bind(this),
            chgrp: this.chgrp.bind(this),
            useradd: this.useradd.bind(this),
            userdel: this.userdel.bind(this),
            usermod: this.usermod.bind(this),
            groupadd: this.groupadd.bind(this),
            passwd: this.passwd.bind(this),
            su: this.su.bind(this),
            fdisk: this.fdisk.bind(this),
            mkfs: this.mkfs.bind(this),
            fsck: this.fsck.bind(this),
            dd: this.dd.bind(this),
            tar: this.tar.bind(this),
            gzip: this.gzip.bind(this),
            gunzip: this.gunzip.bind(this),
            zip: this.zip.bind(this),
            unzip: this.unzip.bind(this),
            ssh: this.ssh.bind(this),
            scp: this.scp.bind(this),
            rsync: this.rsync.bind(this),
            hostname: this.hostname.bind(this),
            ifconfig: this.ifconfig.bind(this),
            ip: this.ip.bind(this),
            route: this.route.bind(this),
            traceroute: this.traceroute.bind(this),
            nslookup: this.nslookup.bind(this),
            iptables: this.iptables.bind(this),
            tcpdump: this.tcpdump.bind(this),
            kill: this.kill.bind(this),
            killall: this.killall.bind(this),
            pkill: this.pkill.bind(this),
            bg: this.bg.bind(this),
            fg: this.fg.bind(this),
            jobs: this.jobs.bind(this),
            nohup: this.nohup.bind(this),
            reboot: this.reboot.bind(this),
            shutdown: this.shutdown.bind(this),
            init: this.initCmd.bind(this),
            service: this.service.bind(this),
            chkconfig: this.chkconfig.bind(this),
            dmesg: this.dmesg.bind(this),
            last: this.last.bind(this),
            w: this.w.bind(this),
            who: this.who.bind(this),
            history: this.historyCmd.bind(this),
            alias: this.alias.bind(this),
            env: this.env.bind(this),
            export: this.exportCmd.bind(this),
            source: this.source.bind(this),
            yum: this.yum.bind(this),
            rpm: this.rpm.bind(this)
        };
        console.log('Commands setup complete');
        } catch (error) {
            console.error('Error setting up commands:', error);
            console.error('Error stack:', error.stack);
        }

        console.log('About to call init()');
        this.init();
    }

    init() {
        console.log('init() called');
        console.log('this.input:', this.input);
        
        if (this.input) {
            this.input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const command = this.input.value.trim();
                    if (command) {
                        this.executeCommand(command);
                        this.history.push(command);
                        this.historyIndex = this.history.length;
                    }
                    this.input.value = '';
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    if (this.historyIndex > 0) {
                        this.historyIndex--;
                        this.input.value = this.history[this.historyIndex];
                    }
                } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    if (this.historyIndex < this.history.length - 1) {
                        this.historyIndex++;
                        this.input.value = this.history[this.historyIndex];
                    } else {
                        this.historyIndex = this.history.length;
                        this.input.value = '';
                    }
                }
            });
        } else {
            console.error('Input element not found, skipping event listener');
        }

        console.log('About to call setupWorkshopUI');
        this.setupWorkshopUI();
        console.log('setupWorkshopUI returned');
    }

    setupWorkshopUI() {
        console.log('setupWorkshopUI called');
        console.log('workshops:', workshops);
        console.log('workshops.length:', workshops ? workshops.length : 'undefined');
        
        const workshopList = document.getElementById('workshop-list');
        console.log('workshopList element:', workshopList);
        
        if (!workshopList) {
            console.error('workshop-list element not found!');
            return;
        }
        
        if (!workshops || workshops.length === 0) {
            console.error('No workshops found!');
            return;
        }
        
        workshops.forEach((workshop, index) => {
            console.log(`Adding workshop ${index}:`, workshop.title);
            const card = document.createElement('div');
            card.className = 'workshop-card';
            card.innerHTML = `
                <h3>${workshop.title}</h3>
                <p>${workshop.description}</p>
                <div class="step-count">${workshop.steps.length} steps</div>
            `;
            card.onclick = () => this.startWorkshop(workshop);
            workshopList.appendChild(card);
        });
        
        console.log('All workshops added');

        document.getElementById('back-btn').onclick = () => this.exitWorkshop();
        document.getElementById('hint-btn').onclick = () => this.showHint();
        document.getElementById('quiz-btn').onclick = () => this.startQuiz();
    }

    startWorkshop(workshop) {
        this.currentWorkshop = workshop;
        this.currentStep = 0;
        this.currentHintIndex = 0;
        this.currentQuizQuestion = undefined;
        
        // Add workshop ID to URL so it persists on refresh
        const url = new URL(window.location);
        url.searchParams.set('workshop', workshop.id);
        window.history.pushState({}, '', url);
        
        // Load progress from localStorage
        const savedProgress = this.loadProgress(workshop.id);
        if (savedProgress) {
            this.completedSteps = new Set(savedProgress.completedSteps);
            this.currentStep = savedProgress.currentStep || 0;
        } else {
            this.completedSteps = new Set();
        }
        
        document.getElementById('workshop-selector').style.display = 'none';
        document.getElementById('workshop-container').style.display = 'flex';
        document.getElementById('workshop-title').textContent = workshop.title;
        
        // Show quiz button if workshop has a quiz
        const quizBtn = document.getElementById('quiz-btn');
        if (workshop.quiz && workshop.quiz.length > 0) {
            quizBtn.style.display = 'block';
        } else {
            quizBtn.style.display = 'none';
        }
        
        this.clear([]);
        this.renderStepNavigation();
        this.loadStep();
        this.input.focus();
    }

    exitWorkshop() {
        this.currentWorkshop = null;
        this.currentStep = 0;
        this.completedSteps = new Set();
        
        // Remove workshop ID from URL
        const url = new URL(window.location);
        url.searchParams.delete('workshop');
        window.history.pushState({}, '', url);
        
        document.getElementById('workshop-selector').style.display = 'block';
        document.getElementById('workshop-container').style.display = 'none';
        this.clear([]);
    }

    renderStepNavigation() {
        const nav = document.getElementById('step-navigation');
        
        // Remove only step buttons, keep quiz button
        const stepButtons = nav.querySelectorAll('.step-btn');
        stepButtons.forEach(btn => btn.remove());
        
        // Get quiz button if it exists
        const quizBtn = document.getElementById('quiz-btn');
        
        for (let i = 0; i < this.currentWorkshop.steps.length; i++) {
            const btn = document.createElement('button');
            btn.className = 'step-btn';
            btn.textContent = i + 1;
            
            if (i === this.currentStep) {
                btn.classList.add('active');
            }
            if (this.completedSteps.has(i)) {
                btn.classList.add('completed');
            }
            
            btn.onclick = () => this.goToStep(i);
            
            // Insert before quiz button if it exists, otherwise append
            if (quizBtn) {
                nav.insertBefore(btn, quizBtn);
            } else {
                nav.appendChild(btn);
            }
        }
    }

    goToStep(stepIndex) {
        if (stepIndex >= 0 && stepIndex < this.currentWorkshop.steps.length) {
            this.currentStep = stepIndex;
            this.saveProgress();
            this.renderStepNavigation();
            this.loadStep();
        }
    }

    saveProgress() {
        if (!this.currentWorkshop) return;
        
        const progress = {
            currentStep: this.currentStep,
            completedSteps: Array.from(this.completedSteps),
            lastUpdated: new Date().toISOString()
        };
        
        localStorage.setItem(`workshop_${this.currentWorkshop.id}`, JSON.stringify(progress));
    }

    loadProgress(workshopId) {
        const saved = localStorage.getItem(`workshop_${workshopId}`);
        return saved ? JSON.parse(saved) : null;
    }

    loadStep() {
        const step = this.currentWorkshop.steps[this.currentStep];
        this.currentHintIndex = 0;
        
        // Display instruction
        document.getElementById('instruction-text').textContent = step.instruction;
        
        document.getElementById('hint-text').textContent = '';
        document.getElementById('hint-text').style.display = 'none';
        document.getElementById('success-message').textContent = '';
        document.getElementById('success-message').style.display = 'none';
        
        // Focus input
        if (this.input) {
            this.input.focus();
        }
    }

    showHint() {
        const step = this.currentWorkshop.steps[this.currentStep];
        const hintText = document.getElementById('hint-text');
        
        // Support both old single hint and new multiple hints
        const hints = step.hints || [step.hint];
        
        if (this.currentHintIndex === 0 && step.knowledge) {
            // First click with knowledge: show knowledge
            hintText.innerHTML = `<div style="background: #fff3cd; border-left: 4px solid #ffc107; padding: 12px; margin-bottom: 10px; border-radius: 4px; color: #856404;"><strong>📚 Key Knowledge:</strong><br>${step.knowledge}</div>`;
            hintText.style.display = 'block';
            this.currentHintIndex++;
        } else {
            // Show actual hints
            const hintIndex = this.currentHintIndex - (step.knowledge ? 1 : 0);
            if (hintIndex < hints.length) {
                const currentHintText = hints[hintIndex];
                if (step.knowledge && this.currentHintIndex === 1) {
                    // Append hint to knowledge (second click when knowledge exists)
                    hintText.innerHTML += `<div style="margin-top: 10px; padding: 10px; background: #e7f3ff; border-left: 4px solid #2196F3; border-radius: 4px;"><strong>💡 Hint:</strong> ${currentHintText}</div>`;
                } else {
                    // Show hint alone (no knowledge or subsequent hints)
                    hintText.innerHTML = `<div style="padding: 10px; background: #e7f3ff; border-left: 4px solid #2196F3; border-radius: 4px;"><strong>💡 Hint:</strong> ${currentHintText}</div>`;
                }
                hintText.style.display = 'block';
                this.currentHintIndex++;
            }
        }
    }

    checkStepCompletion(command) {
        if (!this.currentWorkshop) return;
        
        const step = this.currentWorkshop.steps[this.currentStep];
        if (step.validate(command)) {
            const successMsg = document.getElementById('success-message');
            successMsg.textContent = `✓ ${step.success}`;
            successMsg.style.display = 'block';
            
            // Mark step as completed
            this.completedSteps.add(this.currentStep);
            this.saveProgress();
            this.renderStepNavigation();
            
            this.currentStep++;
            
            if (this.currentStep >= this.currentWorkshop.steps.length) {
                setTimeout(() => {
                    successMsg.textContent = '🎉 Congratulations! You completed all steps!';
                    if (this.currentWorkshop.quiz) {
                        successMsg.textContent += ' Click the Quiz button to test your knowledge.';
                    }
                }, 1000);
            } else {
                this.saveProgress();
                setTimeout(() => {
                    this.renderStepNavigation();
                    this.loadStep();
                }, 1500);
            }
        }
    }

    startQuiz() {
        if (!this.currentWorkshop || !this.currentWorkshop.quiz) {
            return;
        }
        
        // Prepare quiz data
        const quizData = {
            title: this.currentWorkshop.title,
            questions: this.currentWorkshop.quiz
        };
        
        // Store quiz data in localStorage
        localStorage.setItem(`quiz_${this.currentWorkshop.id}`, JSON.stringify(quizData));
        
        // Open quiz in new tab
        window.open(`quiz.html?workshop=${this.currentWorkshop.id}`, '_blank');
    }

    showQuizQuestion() {
        const quiz = this.currentWorkshop.quiz[this.currentQuizQuestion];
        document.getElementById('instruction-text').innerHTML = `
            <strong>Question ${this.currentQuizQuestion + 1} of ${this.currentWorkshop.quiz.length}</strong><br><br>
            ${quiz.question}<br><br>
            ${quiz.options.map((opt, i) => `${i + 1}. ${opt}`).join('<br>')}
        `;
        this.print(`\nType the number of your answer (1-${quiz.options.length}):`);
    }

    checkQuizAnswer(answer) {
        const quiz = this.currentWorkshop.quiz[this.currentQuizQuestion];
        const answerNum = parseInt(answer) - 1;
        
        if (answerNum === quiz.correct) {
            this.print('✓ Correct!', 'success-message');
            this.quizScore++;
        } else {
            this.print(`✗ Incorrect. The correct answer was: ${quiz.options[quiz.correct]}`, 'error');
        }
        
        this.currentQuizQuestion++;
        
        if (this.currentQuizQuestion >= this.currentWorkshop.quiz.length) {
            setTimeout(() => this.showQuizResults(), 2000);
        } else {
            setTimeout(() => this.showQuizQuestion(), 2000);
        }
    }

    showQuizResults() {
        const percentage = Math.round((this.quizScore / this.currentWorkshop.quiz.length) * 100);
        this.clear([]);
        this.currentQuizQuestion = undefined;
        document.getElementById('instruction-text').innerHTML = `
            <strong>Quiz Complete!</strong><br><br>
            Score: ${this.quizScore} / ${this.currentWorkshop.quiz.length} (${percentage}%)<br><br>
            ${percentage >= 80 ? '🎉 Excellent work!' : percentage >= 60 ? '👍 Good job!' : '📚 Keep practicing!'}
        `;
        document.getElementById('hint-btn').style.display = 'inline-block';
        document.getElementById('step-navigation').style.display = 'flex';
        
        // Option to retake quiz or continue
        this.print('\nType "retake" to try again, or continue with the workshop.');
    }

    print(text, className = '') {
        const line = document.createElement('div');
        line.className = `output-line ${className}`;
        line.textContent = text;
        this.output.appendChild(line);
        this.output.parentElement.scrollTop = this.output.parentElement.scrollHeight;
    }

    getPromptPath() {
        // Show ~ for home directory, otherwise show the path
        if (this.fs.currentPath === '/home/user') {
            return '~';
        }
        if (this.fs.currentPath.startsWith('/home/user/')) {
            return '~' + this.fs.currentPath.substring(10);
        }
        return this.fs.currentPath;
    }

    updatePrompt() {
        const promptElement = document.querySelector('.prompt');
        if (promptElement) {
            promptElement.textContent = `user@practice:${this.getPromptPath()}$`;
        }
    }

    executeCommand(input) {
        this.print(`user@practice:${this.getPromptPath()}$ ${input}`, 'command-echo');
        
        const parts = input.trim().split(/\s+/);
        const cmd = parts[0];
        const args = parts.slice(1);

        if (this.commands[cmd]) {
            this.commands[cmd](args);
            this.updatePrompt();
            this.checkStepCompletion(input);
        } else {
            this.print(`${cmd}: command not found`, 'error');
        }
    }

    ls(args) {
        const dir = this.fs.getCurrentDir();
        if (!dir || !dir.contents) {
            this.print('', 'error');
            return;
        }
        
        const items = Object.keys(dir.contents);
        if (items.length === 0) {
            return;
        }
        
        this.print(items.join('  '));
    }

    pwd(args) {
        this.print(this.fs.currentPath);
    }

    cd(args) {
        if (args.length === 0) {
            this.fs.currentPath = '/home/user';
            return;
        }

        const targetPath = this.fs.resolvePath(args[0]);
        const node = this.fs.getNode(targetPath);

        if (!node) {
            this.print(`cd: ${args[0]}: No such file or directory`, 'error');
        } else if (node.type !== 'dir') {
            this.print(`cd: ${args[0]}: Not a directory`, 'error');
        } else {
            this.fs.currentPath = targetPath;
        }
    }

    cat(args) {
        if (args.length === 0) {
            this.print('cat: missing file operand', 'error');
            return;
        }

        const filePath = this.fs.resolvePath(args[0]);
        const node = this.fs.getNode(filePath);

        if (!node) {
            this.print(`cat: ${args[0]}: No such file or directory`, 'error');
        } else if (node.type !== 'file') {
            this.print(`cat: ${args[0]}: Is a directory`, 'error');
        } else {
            this.print(node.content);
        }
    }

    mkdir(args) {
        if (args.length === 0) {
            this.print('mkdir: missing operand', 'error');
            return;
        }

        const dirPath = this.fs.resolvePath(args[0]);
        const parentPath = dirPath.substring(0, dirPath.lastIndexOf('/')) || '/';
        const dirName = dirPath.substring(dirPath.lastIndexOf('/') + 1);
        const parent = this.fs.getNode(parentPath);

        if (!parent) {
            this.print(`mkdir: cannot create directory '${args[0]}': No such file or directory`, 'error');
        } else if (parent.contents[dirName]) {
            this.print(`mkdir: cannot create directory '${args[0]}': File exists`, 'error');
        } else {
            parent.contents[dirName] = { type: 'dir', contents: {} };
        }
    }

    touch(args) {
        if (args.length === 0) {
            this.print('touch: missing file operand', 'error');
            return;
        }

        const filePath = this.fs.resolvePath(args[0]);
        const parentPath = filePath.substring(0, filePath.lastIndexOf('/')) || '/';
        const fileName = filePath.substring(filePath.lastIndexOf('/') + 1);
        const parent = this.fs.getNode(parentPath);

        if (!parent) {
            this.print(`touch: cannot touch '${args[0]}': No such file or directory`, 'error');
        } else if (!parent.contents[fileName]) {
            parent.contents[fileName] = { type: 'file', content: '' };
            // Silent success like real Unix touch
        } else {
            // File already exists, update timestamp (simulated)
        }
    }

    echo(args) {
        this.print(args.join(' '));
    }

    clear(args) {
        this.output.innerHTML = '';
    }

    help(args) {
        this.print('Available commands:');
        this.print('  ls, pwd, cd, cat, mkdir, touch, echo, clear');
        this.print('  chmod, ps, top, df, free, uptime');
        this.print('  crontab, at, journalctl, grep, tail');
        this.print('  sudo, apt, ping, netstat, lsof, systemctl');
    }

    chmod(args) {
        if (args.length < 2) {
            this.print('chmod: missing operand', 'error');
            return;
        }
        this.print(`Changed permissions of ${args[args.length - 1]}`);
    }

    ps(args) {
        this.print('PID   TTY      TIME     CMD');
        this.print('1234  pts/0    00:00:01 bash');
        this.print('5678  pts/0    00:00:00 ps');
    }

    systemctl(args) {
        if (args[0] === 'status') {
            this.print('● nginx.service - A high performance web server');
            this.print('   Loaded: loaded (/lib/systemd/system/nginx.service)');
            this.print('   Active: active (running)');
        } else {
            this.print(`systemctl ${args.join(' ')}`);
        }
    }

    top(args) {
        this.print('top - 14:23:45 up 5 days, 3:21, 2 users, load average: 0.15, 0.10, 0.08');
        this.print('Tasks: 142 total, 1 running, 141 sleeping');
        this.print('CPU: 2.3%us, 1.2%sy, 0.0%ni, 96.1%id');
    }

    df(args) {
        this.print('Filesystem     Size  Used Avail Use% Mounted on');
        this.print('/dev/sda1       50G   20G   28G  42% /');
        this.print('/dev/sda2      100G   45G   50G  48% /home');
    }

    free(args) {
        this.print('              total        used        free      shared');
        this.print('Mem:           8Gi        4Gi        2Gi        100Mi');
        this.print('Swap:          2Gi        0Gi        2Gi');
    }

    uptime(args) {
        this.print('14:23:45 up 5 days, 3:21, 2 users, load average: 0.15, 0.10, 0.08');
    }

    crontab(args) {
        if (args[0] === '-l') {
            this.print('# m h  dom mon dow   command');
            this.print('0 2 * * * /usr/bin/backup.sh');
        } else if (args[0] === '-e') {
            this.print('Opening crontab editor...');
        }
    }

    at(args) {
        this.print(`job 1 at ${new Date().toLocaleString()}`);
    }

    journalctl(args) {
        this.print('-- Logs begin at Mon 2024-01-01 00:00:00 UTC --');
        this.print('Dec 12 14:23:45 system systemd[1]: Started Session.');
        this.print('Dec 12 14:23:46 system sshd[1234]: Accepted connection');
    }

    grep(args) {
        if (args.length === 0) {
            this.print('grep: missing pattern', 'error');
            return;
        }
        this.print(`Searching for "${args[0]}"...`);
        this.print('Dec 12 14:20:01 system error: Connection timeout');
        this.print('Dec 12 14:21:15 system error: Failed to start service');
    }

    tail(args) {
        this.print('Dec 12 14:23:40 system: Service started');
        this.print('Dec 12 14:23:41 system: Connection established');
        this.print('Dec 12 14:23:42 system: Request processed');
        this.print('Dec 12 14:23:43 system: Response sent');
    }

    sudo(args) {
        if (args.length === 0) {
            this.print('sudo: missing command', 'error');
            return;
        }
        const cmd = args[0];
        const cmdArgs = args.slice(1);
        if (this.commands[cmd]) {
            this.commands[cmd](cmdArgs);
        }
    }

    apt(args) {
        if (args.length === 0) {
            this.print('apt: missing command', 'error');
            return;
        }
        if (args[0] === 'update') {
            this.print('Hit:1 http://archive.ubuntu.com/ubuntu jammy InRelease');
            this.print('Reading package lists... Done');
        } else if (args[0] === 'install') {
            if (!args[1]) {
                this.print('E: Command line option requires an argument', 'error');
                return;
            }
            this.print(`Reading package lists... Done`);
            this.print(`Building dependency tree... Done`);
            this.print(`${args[1]} is already the newest version`);
        } else if (args[0] === 'search') {
            if (!args[1]) {
                this.print('E: You must give at least one search pattern', 'error');
                return;
            }
            this.print(`Sorting... Done`);
            this.print(`${args[1]}/jammy 3.10.0-1 amd64`);
            this.print(`  ${args[1]} programming language`);
        } else if (args[0] === 'remove') {
            if (!args[1]) {
                this.print('E: Command line option requires an argument', 'error');
                return;
            }
            this.print(`Removing ${args[1]}...`);
            this.print(`Done.`);
        } else {
            this.print(`E: Invalid operation ${args[0]}`, 'error');
        }
    }

    ping(args) {
        if (args.length === 0) {
            this.print('ping: missing host', 'error');
            return;
        }
        this.print(`PING ${args[0]} (172.217.14.206): 56 data bytes`);
        this.print(`64 bytes from 172.217.14.206: icmp_seq=0 ttl=117 time=12.3 ms`);
        this.print(`64 bytes from 172.217.14.206: icmp_seq=1 ttl=117 time=11.8 ms`);
    }

    netstat(args) {
        this.print('Active Internet connections');
        this.print('Proto Recv-Q Send-Q Local Address           Foreign Address         State');
        this.print('tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN');
        this.print('tcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN');
    }

    lsof(args) {
        this.print('COMMAND  PID USER   FD   TYPE DEVICE SIZE/OFF NODE NAME');
        this.print('nginx    1234 www   6u  IPv4  12345      0t0  TCP *:80 (LISTEN)');
    }

    man(args) {
        if (args.length === 0) {
            this.print('What manual page do you want?', 'error');
            return;
        }
        
        const manPages = {
            'free': 'NAME\n       free - Display amount of free and used memory in the system\n\nSYNOPSIS\n       free [options]\n\nDESCRIPTION\n       free displays the total amount of free and used physical and swap memory\n       in the system, as well as the buffers and caches used by the kernel.\n\nOPTIONS\n       -h, --human\n              Show all output fields automatically scaled to shortest unit.',
            'ls': 'NAME\n       ls - list directory contents\n\nSYNOPSIS\n       ls [OPTION]... [FILE]...\n\nDESCRIPTION\n       List information about the FILEs (the current directory by default).\n\nOPTIONS\n       -l     use a long listing format\n       -a     do not ignore entries starting with .',
            'pwd': 'NAME\n       pwd - print name of current/working directory\n\nSYNOPSIS\n       pwd [OPTION]...\n\nDESCRIPTION\n       Print the full filename of the current working directory.',
            'cd': 'NAME\n       cd - change the working directory\n\nSYNOPSIS\n       cd [dir]\n\nDESCRIPTION\n       Change the current directory to DIR. The default DIR is the home directory.',
            'cat': 'NAME\n       cat - concatenate files and print on the standard output\n\nSYNOPSIS\n       cat [OPTION]... [FILE]...\n\nDESCRIPTION\n       Concatenate FILE(s) to standard output.',
            'top': 'NAME\n       top - display Linux processes\n\nSYNOPSIS\n       top -hv|-bcEeHiOSs1 -d secs -n max -u|U user -p pids -o field -w [cols]\n\nDESCRIPTION\n       The top program provides a dynamic real-time view of a running system.\n       It can display system summary information as well as a list of processes.',
            'chmod': 'NAME\n       chmod - change file mode bits\n\nSYNOPSIS\n       chmod [OPTION]... MODE[,MODE]... FILE...\n\nDESCRIPTION\n       chmod changes the file mode bits of each given file according to mode.',
            'cp': 'NAME\n       cp - copy files and directories\n\nSYNOPSIS\n       cp [OPTION]... SOURCE DEST\n\nDESCRIPTION\n       Copy SOURCE to DEST, or multiple SOURCE(s) to DIRECTORY.\n\nOPTIONS\n       -r, -R, --recursive\n              copy directories recursively'
        };
        
        const page = manPages[args[0]];
        if (page) {
            this.print(page);
        } else {
            this.print(`No manual entry for ${args[0]}`);
        }
    }

    wc(args) {
        if (args.length === 0) {
            this.print('wc: missing operand', 'error');
            return;
        }
        this.print('  2  10  50 ' + args[args.length - 1]);
    }

    mv(args) {
        if (args.length < 2) {
            this.print('mv: missing operand', 'error');
            return;
        }
        this.print(`Moved ${args[0]} to ${args[1]}`);
    }

    cp(args) {
        if (args.length < 2) {
            this.print('cp: missing operand', 'error');
            return;
        }
        this.print(`Copied ${args[0]} to ${args[1]}`);
    }

    rm(args) {
        if (args.length === 0) {
            this.print('rm: missing operand', 'error');
            return;
        }
        this.print(`Removed ${args[args.length - 1]}`);
    }

    rmdir(args) {
        if (args.length === 0) {
            this.print('rmdir: missing operand', 'error');
            return;
        }
        this.print(`Removed directory ${args[0]}`);
    }

    id(args) {
        if (args.includes('-u')) {
            this.print('1000');
        } else if (args.includes('-g')) {
            this.print('1000');
        } else if (args.includes('-gn')) {
            this.print('user');
        } else {
            this.print('uid=1000(user) gid=1000(user) groups=1000(user),4(adm),27(sudo)');
        }
    }

    whoami(args) {
        this.print('user');
    }

    groups(args) {
        this.print('user adm sudo');
    }

    lsblk(args) {
        this.print('NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT');
        this.print('xvda     202:0    0   8G  0 disk');
        this.print('└─xvda1  202:1    0   8G  0 part /');
    }

    mount(args) {
        this.print('/dev/xvda1 on / type xfs (rw,relatime)');
        this.print('tmpfs on /tmp type tmpfs (rw,nosuid,nodev)');
    }

    du(args) {
        this.print('4.0K    ./documents');
        this.print('8.0K    .');
    }

    curl(args) {
        if (args.length === 0) {
            this.print('curl: try \'curl --help\' for more information', 'error');
            return;
        }
        this.print('<!DOCTYPE html>');
        this.print('<html><head><title>Example</title></head>');
        this.print('<body><h1>Example Domain</h1></body></html>');
    }

    wget(args) {
        if (args.length === 0) {
            this.print('wget: missing URL', 'error');
            return;
        }
        this.print(`Connecting to ${args[0]}...`);
        this.print('HTTP request sent, awaiting response... 200 OK');
        this.print('Saving to: \'index.html\'');
    }

    dig(args) {
        if (args.length === 0) {
            this.print('Usage: dig [@server] domain', 'error');
            return;
        }
        this.print('; <<>> DiG 9.10.6 <<>> ' + args[0]);
        this.print(';; ANSWER SECTION:');
        this.print(args[0] + '.    300    IN    A    93.184.216.34');
    }

    nano(args) {
        if (args.length === 0) {
            this.print('Usage: nano [filename]', 'error');
            return;
        }
        this.print(`Opening ${args[0]} in nano editor...`);
        this.print('(In a real terminal, this would open a text editor)');
    }

    vi(args) { this.nano(args); }
    vim(args) { this.nano(args); }

    sed(args) {
        this.print('sed: stream editor for filtering and transforming text');
    }

    awk(args) {
        this.print('awk: pattern scanning and processing language');
    }

    cut(args) {
        this.print('cut: remove sections from each line of files');
    }

    sort(args) {
        this.print('line1');
        this.print('line2');
        this.print('line3');
    }

    uniq(args) {
        this.print('unique line 1');
        this.print('unique line 2');
    }

    find(args) {
        this.print('./file1.txt');
        this.print('./dir1/file2.txt');
    }

    locate(args) {
        if (args.length === 0) {
            this.print('locate: missing operand', 'error');
            return;
        }
        this.print(`/usr/bin/${args[0]}`);
    }

    which(args) {
        if (args.length === 0) {
            this.print('which: missing operand', 'error');
            return;
        }
        this.print(`/usr/bin/${args[0]}`);
    }

    whereis(args) {
        if (args.length === 0) {
            this.print('whereis: missing operand', 'error');
            return;
        }
        this.print(`${args[0]}: /usr/bin/${args[0]} /usr/share/man/man1/${args[0]}.1.gz`);
    }

    file(args) {
        if (args.length === 0) {
            this.print('file: missing operand', 'error');
            return;
        }
        this.print(`${args[0]}: ASCII text`);
    }

    head(args) {
        this.print('Line 1');
        this.print('Line 2');
        this.print('Line 3');
    }

    less(args) {
        if (args.length === 0) {
            this.print('Missing filename', 'error');
            return;
        }
        this.print(`Viewing ${args[0]}...`);
        this.print('(Use q to quit in real terminal)');
    }

    more(args) { this.less(args); }

    ln(args) {
        if (args.length < 2) {
            this.print('ln: missing operand', 'error');
            return;
        }
        this.print(`Created link from ${args[0]} to ${args[1]}`);
    }

    chown(args) {
        if (args.length < 2) {
            this.print('chown: missing operand', 'error');
            return;
        }
        this.print(`Changed ownership of ${args[1]} to ${args[0]}`);
    }

    chgrp(args) {
        if (args.length < 2) {
            this.print('chgrp: missing operand', 'error');
            return;
        }
        this.print(`Changed group of ${args[1]} to ${args[0]}`);
    }

    useradd(args) {
        if (args.length === 0) {
            this.print('useradd: missing username', 'error');
            return;
        }
        this.print(`User ${args[0]} created`);
    }

    userdel(args) {
        if (args.length === 0) {
            this.print('userdel: missing username', 'error');
            return;
        }
        this.print(`User ${args[0]} deleted`);
    }

    usermod(args) {
        this.print('User modified');
    }

    groupadd(args) {
        if (args.length === 0) {
            this.print('groupadd: missing group name', 'error');
            return;
        }
        this.print(`Group ${args[0]} created`);
    }

    passwd(args) {
        this.print('Changing password...');
        this.print('Password updated successfully');
    }

    su(args) {
        const user = args.length > 0 ? args[0] : 'root';
        this.print(`Switching to user ${user}...`);
    }

    fdisk(args) {
        this.print('Disk /dev/xvda: 8 GiB');
        this.print('Disk /dev/xvdb: 100 GiB');
    }

    mkfs(args) {
        if (args.length === 0) {
            this.print('mkfs: missing device', 'error');
            return;
        }
        this.print(`Creating filesystem on ${args[args.length - 1]}...`);
    }

    fsck(args) {
        this.print('Checking filesystem...');
        this.print('Filesystem is clean');
    }

    dd(args) {
        this.print('1000+0 records in');
        this.print('1000+0 records out');
        this.print('1048576 bytes copied');
    }

    tar(args) {
        if (args.length === 0) {
            this.print('tar: missing operand', 'error');
            return;
        }
        this.print(`tar: ${args.join(' ')}`);
    }

    gzip(args) {
        if (args.length === 0) {
            this.print('gzip: missing operand', 'error');
            return;
        }
        this.print(`Compressed ${args[0]}`);
    }

    gunzip(args) {
        if (args.length === 0) {
            this.print('gunzip: missing operand', 'error');
            return;
        }
        this.print(`Decompressed ${args[0]}`);
    }

    zip(args) { this.gzip(args); }
    unzip(args) { this.gunzip(args); }

    ssh(args) {
        if (args.length === 0) {
            this.print('ssh: missing hostname', 'error');
            return;
        }
        this.print(`Connecting to ${args[0]}...`);
    }

    scp(args) {
        if (args.length < 2) {
            this.print('scp: missing operand', 'error');
            return;
        }
        this.print(`Copying ${args[0]} to ${args[1]}...`);
    }

    rsync(args) {
        this.print('rsync: syncing files...');
    }

    hostname(args) {
        this.print('practice-server');
    }

    ifconfig(args) {
        this.print('eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>');
        this.print('      inet 172.31.0.10  netmask 255.255.255.0');
    }

    ip(args) {
        this.print('1: lo: <LOOPBACK,UP,LOWER_UP>');
        this.print('2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP>');
        this.print('    inet 172.31.0.10/24');
    }

    route(args) {
        this.print('Kernel IP routing table');
        this.print('Destination     Gateway         Genmask');
        this.print('0.0.0.0         172.31.0.1      0.0.0.0');
    }

    traceroute(args) {
        if (args.length === 0) {
            this.print('traceroute: missing host', 'error');
            return;
        }
        this.print(`traceroute to ${args[0]}`);
        this.print('1  172.31.0.1  1.234 ms');
        this.print('2  10.0.0.1    5.678 ms');
    }

    nslookup(args) {
        if (args.length === 0) {
            this.print('nslookup: missing host', 'error');
            return;
        }
        this.print(`Server:  8.8.8.8`);
        this.print(`Address: 8.8.8.8#53`);
        this.print(`Name:    ${args[0]}`);
        this.print(`Address: 93.184.216.34`);
    }

    iptables(args) {
        this.print('Chain INPUT (policy ACCEPT)');
        this.print('Chain FORWARD (policy ACCEPT)');
        this.print('Chain OUTPUT (policy ACCEPT)');
    }

    tcpdump(args) {
        this.print('tcpdump: listening on eth0');
        this.print('12:34:56.789 IP 172.31.0.10 > 8.8.8.8: ICMP echo request');
    }

    kill(args) {
        if (args.length === 0) {
            this.print('kill: missing PID', 'error');
            return;
        }
        this.print(`Killed process ${args[args.length - 1]}`);
    }

    killall(args) {
        if (args.length === 0) {
            this.print('killall: missing process name', 'error');
            return;
        }
        this.print(`Killed all ${args[0]} processes`);
    }

    pkill(args) { this.killall(args); }

    bg(args) {
        this.print('[1]+ Running');
    }

    fg(args) {
        this.print('Bringing job to foreground');
    }

    jobs(args) {
        this.print('[1]+ Running    sleep 100 &');
    }

    nohup(args) {
        this.print('nohup: ignoring input and appending output to nohup.out');
    }

    reboot(args) {
        this.print('System is rebooting...');
    }

    shutdown(args) {
        this.print('System is shutting down...');
    }

    initCmd(args) {
        this.print('Changing runlevel...');
    }

    service(args) {
        if (args.length < 2) {
            this.print('service: missing arguments', 'error');
            return;
        }
        this.print(`${args[0]} ${args[1]}`);
    }

    chkconfig(args) {
        this.print('httpd  0:off  1:off  2:on  3:on  4:on  5:on  6:off');
    }

    dmesg(args) {
        this.print('[    0.000000] Linux version 5.10.0');
        this.print('[    0.000000] Command line: BOOT_IMAGE=/boot/vmlinuz');
    }

    last(args) {
        this.print('user     pts/0        172.31.0.1       Mon Dec 12 10:00   still logged in');
    }

    w(args) {
        this.print(' 14:23:45 up 5 days,  3:21,  1 user,  load average: 0.15, 0.10, 0.08');
        this.print('USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT');
        this.print('user     pts/0    172.31.0.1       10:00    0.00s  0.04s  0.00s w');
    }

    who(args) {
        this.print('user     pts/0        2024-12-12 10:00 (172.31.0.1)');
    }

    historyCmd(args) {
        this.print('  1  pwd');
        this.print('  2  ls');
        this.print('  3  cd /home');
    }

    alias(args) {
        if (args.length === 0) {
            this.print('alias ll=\'ls -l\'');
            this.print('alias la=\'ls -la\'');
        } else {
            this.print(`alias ${args.join(' ')}`);
        }
    }

    env(args) {
        this.print('PATH=/usr/local/bin:/usr/bin:/bin');
        this.print('HOME=/home/user');
        this.print('USER=user');
    }

    exportCmd(args) {
        if (args.length === 0) {
            this.env(args);
        } else {
            this.print(`Exported ${args[0]}`);
        }
    }

    source(args) {
        if (args.length === 0) {
            this.print('source: missing filename', 'error');
            return;
        }
        this.print(`Sourced ${args[0]}`);
    }

    yum(args) {
        if (args.length === 0) {
            this.print('yum: missing command', 'error');
            return;
        }
        if (args[0] === 'list') {
            this.print('Installed Packages');
            this.print('httpd.x86_64    2.4.54-1    @amzn2-core');
        } else if (args[0] === 'install') {
            if (!args[1]) {
                this.print('Error: Nothing to do', 'error');
                return;
            }
            this.print(`Installing ${args[1]}...`);
            this.print('Complete!');
        } else if (args[0] === 'remove') {
            if (!args[1]) {
                this.print('Error: Nothing to do', 'error');
                return;
            }
            this.print(`Removing ${args[1]}...`);
            this.print('Complete!');
        } else if (args[0] === 'status') {
            this.print(`yum: 'status' is not a yum command. See 'yum --help'.`, 'error');
        } else {
            this.print(`yum: '${args[0]}' is not a yum command. See 'yum --help'.`, 'error');
        }
    }

    rpm(args) {
        if (args.includes('-qa')) {
            this.print('httpd-2.4.54-1.x86_64');
            this.print('nginx-1.20.1-1.x86_64');
        } else {
            this.print('rpm: ' + args.join(' '));
        }
    }
}

const terminal = new Terminal();

// Restore workshop state on page load
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const workshopId = urlParams.get('workshop');
    
    if (workshopId) {
        const workshop = workshops.find(w => w.id === workshopId);
        if (workshop) {
            // Directly load the workshop without calling startWorkshop
            // to avoid adding another history entry
            terminal.currentWorkshop = workshop;
            terminal.currentStep = 0;
            terminal.currentHintIndex = 0;
            terminal.currentQuizQuestion = undefined;
            
            // Load progress from localStorage
            const savedProgress = terminal.loadProgress(workshop.id);
            if (savedProgress) {
                terminal.completedSteps = new Set(savedProgress.completedSteps);
                terminal.currentStep = savedProgress.currentStep || 0;
            } else {
                terminal.completedSteps = new Set();
            }
            
            document.getElementById('workshop-selector').style.display = 'none';
            document.getElementById('workshop-container').style.display = 'flex';
            document.getElementById('workshop-title').textContent = workshop.title;
            
            // Show quiz button if workshop has a quiz
            const quizBtn = document.getElementById('quiz-btn');
            if (workshop.quiz && workshop.quiz.length > 0) {
                quizBtn.style.display = 'block';
            } else {
                quizBtn.style.display = 'none';
            }
            
            terminal.clear([]);
            terminal.renderStepNavigation();
            terminal.loadStep();
            terminal.input.focus();
        }
    }
});
