const workshops = [
    {
        id: 'day1-basics',
        title: 'Linux Fundamentals',
        description: 'Basic filesystem commands, paths, and navigation',
        quiz: [
            {
                question: 'What command shows your current working directory?',
                options: ['cd', 'pwd', 'ls', 'dir'],
                correct: 1
            },
            {
                question: 'Which command lists files and directories?',
                options: ['list', 'dir', 'ls', 'show'],
                correct: 2
            },
            {
                question: 'What does ".." represent in a path?',
                options: ['Current directory', 'Parent directory', 'Home directory', 'Root directory'],
                correct: 1
            },
            {
                question: 'Which symbol represents your home directory?',
                options: ['@', '#', '~', '$'],
                correct: 2
            },
            {
                question: 'What is the root directory in Linux?',
                options: ['/root', '~', '/home', '/'],
                correct: 3
            },
            {
                question: 'Which command changes your current directory?',
                options: ['cd', 'chdir', 'move', 'goto'],
                correct: 0
            }
        ],
        steps: [
            {
                instruction: 'Check where you currently are in the filesystem. Print your working directory.',
                hints: [
                    'There\'s a command that shows your present working directory',
                    'The command starts with "p" and stands for "print working directory"',
                    'Try typing: pwd'
                ],
                validate: (cmd) => cmd === 'pwd',
                success: 'Good! pwd shows you are in /home/user'
            },
            {
                instruction: 'List the contents of your current directory to see what files and folders exist.',
                hints: [
                    'You need a command that lists directory contents',
                    'It\'s a two-letter command that stands for "list"',
                    'Try typing: ls'
                ],
                validate: (cmd) => cmd === 'ls',
                success: 'You can see the files and directories in your current location'
            },
            {
                instruction: 'Create a directory called "question01" in your current location.',
                hints: [
                    'You need a command to make a new directory',
                    'The command is "mkdir" (make directory) followed by the directory name',
                    'Try typing: mkdir question01'
                ],
                validate: (cmd) => cmd === 'mkdir question01',
                success: 'Directory created! mkdir makes new directories'
            },
            {
                instruction: 'Create an empty file called "answer.txt" inside the question01 directory.',
                hints: [
                    'The touch command creates empty files',
                    'You need to specify the path: directory/filename',
                    'Try typing: touch question01/answer.txt'
                ],
                validate: (cmd) => cmd === 'touch question01/answer.txt',
                success: 'File created! touch creates empty files'
            },
            {
                instruction: 'Change into the question01 directory using a relative path.',
                hint: 'Use cd followed by the directory name',
                validate: (cmd) => cmd === 'cd question01',
                success: 'You navigated using a relative path!'
            },
            {
                instruction: 'Verify your location by printing your working directory.',
                hint: 'Print working directory',
                validate: (cmd) => cmd === 'pwd',
                success: 'You should see /home/user/question01'
            },
            {
                instruction: 'Go back to the parent directory using ".."',
                hint: 'Use cd with two dots',
                validate: (cmd) => cmd === 'cd ..',
                success: 'Perfect! ".." means parent directory'
            },
            {
                instruction: 'Navigate back into question01 using "./" prefix (current directory).',
                hint: 'Use cd ./directory-name',
                validate: (cmd) => cmd === 'cd ./question01',
                success: 'The "./" explicitly means "from current directory"'
            },
            {
                instruction: 'List files two levels above your current directory.',
                hint: 'Use ls with ../.. to go up two levels',
                validate: (cmd) => cmd === 'ls ../..',
                success: 'You listed files from two directories up!'
            },
            {
                instruction: 'Return to your home directory using the tilde shortcut.',
                hint: 'Use cd with ~',
                validate: (cmd) => cmd === 'cd ~' || cmd === 'cd',
                success: 'Great! ~ is a shortcut to your home directory'
            }
        ]
    },
    {
        id: 'day1-man-pages',
        title: 'Using Man Pages & Help',
        description: 'Learn to find help and documentation for commands',
        quiz: [
            {
                question: 'What command displays the manual page for a command?',
                options: ['help', 'man', 'info', 'doc'],
                correct: 1
            },
            {
                question: 'Which flag shows human-readable output for the free command?',
                options: ['-r', '-h', '-human', '-readable'],
                correct: 1
            },
            {
                question: 'What does the --help flag do?',
                options: ['Opens manual page', 'Shows quick help', 'Displays version', 'Shows examples'],
                correct: 1
            },
            {
                question: 'Which command shows real-time system processes?',
                options: ['ps', 'top', 'htop', 'proc'],
                correct: 1
            },
            {
                question: 'How do you exit a man page?',
                options: ['Ctrl+C', 'q', 'exit', 'Esc'],
                correct: 1
            },
            {
                question: 'What flag typically shows the version of a command?',
                options: ['-v', '--version', '-ver', 'Both A and B'],
                correct: 3
            }
        ],
        steps: [
            {
                instruction: 'Display the manual page for the "free" command to learn what it does.',
                hint: 'Use man followed by the command name',
                validate: (cmd) => cmd === 'man free',
                success: 'Man pages are the built-in documentation for Linux commands'
            },
            {
                instruction: 'Run the free command to see memory usage information.',
                hint: 'Just type the command name',
                validate: (cmd) => cmd === 'free',
                success: 'free shows memory and swap usage'
            },
            {
                instruction: 'Run free with the human-readable flag to show sizes in MB/GB.',
                hint: 'Add the -h flag to make output human-readable',
                validate: (cmd) => cmd === 'free -h',
                success: 'The -h flag makes numbers easier to read!'
            },
            {
                instruction: 'View the manual page for the "top" command.',
                hint: 'Use man with the command name',
                validate: (cmd) => cmd === 'man top',
                success: 'top is a real-time system monitor'
            },
            {
                instruction: 'Run the top command to see live system information.',
                hint: 'Type the command name (press q to exit when done)',
                validate: (cmd) => cmd === 'top',
                success: 'top shows CPU, memory, and process information in real-time'
            },
            {
                instruction: 'Get help for the cp command using its help flag.',
                hint: 'Use cp --help',
                validate: (cmd) => cmd === 'cp --help',
                success: 'Many commands have a --help option for quick reference'
            },
            {
                instruction: 'Check the version of the cp command.',
                hint: 'Use cp --version',
                validate: (cmd) => cmd === 'cp --version',
                success: 'The --version flag shows the command version'
            }
        ]
    },
    {
        id: 'day1-file-operations',
        title: 'File Operations',
        description: 'Create, copy, move, and delete files and directories',
        quiz: [
            {
                question: 'Which command creates a new directory?',
                options: ['makedir', 'mkdir', 'newdir', 'createdir'],
                correct: 1
            },
            {
                question: 'What does the cp command do?',
                options: ['Change path', 'Copy files', 'Create path', 'Compare files'],
                correct: 1
            },
            {
                question: 'Which flag is needed to copy directories recursively?',
                options: ['-r', '-d', '-a', '-recursive'],
                correct: 0
            },
            {
                question: 'What command moves or renames files?',
                options: ['move', 'rename', 'mv', 'rn'],
                correct: 2
            },
            {
                question: 'Which command removes files?',
                options: ['delete', 'remove', 'rm', 'del'],
                correct: 2
            },
            {
                question: 'What does rm -r do?',
                options: ['Remove read permission', 'Remove recursively', 'Remove and restore', 'Remove root'],
                correct: 1
            },
            {
                question: 'Which command only removes empty directories?',
                options: ['rm', 'rmdir', 'deldir', 'removedir'],
                correct: 1
            }
        ],
        steps: [
            {
                instruction: 'Create a directory called "my_directory".',
                hint: 'Use mkdir',
                validate: (cmd) => cmd === 'mkdir my_directory',
                success: 'Directory created!'
            },
            {
                instruction: 'Create a file called "test.txt" in my_directory.',
                hint: 'Use touch with the path',
                validate: (cmd) => cmd === 'touch my_directory/test.txt',
                success: 'File created inside the directory'
            },
            {
                instruction: 'Copy test.txt to a new file called "test_copy.txt" in the same directory.',
                hint: 'Use cp source destination',
                validate: (cmd) => cmd.includes('cp') && cmd.includes('test.txt') && cmd.includes('test_copy.txt'),
                success: 'File copied! cp duplicates files'
            },
            {
                instruction: 'Move test_copy.txt to your home directory and rename it to "backup.txt".',
                hint: 'Use mv source destination',
                validate: (cmd) => cmd.includes('mv') && cmd.includes('test_copy.txt') && cmd.includes('backup.txt'),
                success: 'File moved and renamed! mv does both'
            },
            {
                instruction: 'List files in my_directory to verify test.txt is still there.',
                hint: 'Use ls with the directory path',
                validate: (cmd) => cmd === 'ls my_directory',
                success: 'test.txt remains in the original location'
            },
            {
                instruction: 'Remove the backup.txt file from your home directory.',
                hint: 'Use rm followed by the filename',
                validate: (cmd) => cmd === 'rm backup.txt',
                success: 'File deleted! Be careful with rm - there\'s no undo'
            },
            {
                instruction: 'Try to remove my_directory using rmdir.',
                hint: 'Use rmdir with the directory name',
                validate: (cmd) => cmd === 'rmdir my_directory',
                success: 'rmdir only works on empty directories'
            },
            {
                instruction: 'Remove my_directory and all its contents using rm with the recursive flag.',
                hint: 'Use rm -r to remove directories recursively',
                validate: (cmd) => cmd === 'rm -r my_directory',
                success: 'Directory and contents removed! rm -r is powerful and dangerous'
            }
        ]
    },
    {
        id: 'day1-text-operations',
        title: 'Text Operations',
        description: 'Work with text files, search, and manipulate content',
        quiz: [
            {
                question: 'Which operator redirects output to a file (overwriting)?',
                options: ['<', '>', '>>', '|'],
                correct: 1
            },
            {
                question: 'Which operator appends output to a file?',
                options: ['>', '>>', '+>', '>>>'],
                correct: 1
            },
            {
                question: 'What command displays file contents?',
                options: ['show', 'display', 'cat', 'view'],
                correct: 2
            },
            {
                question: 'Which command searches for patterns in files?',
                options: ['find', 'search', 'grep', 'locate'],
                correct: 2
            },
            {
                question: 'What does wc command do?',
                options: ['Write content', 'Word count', 'Web content', 'Write command'],
                correct: 1
            },
            {
                question: 'Which command counts lines in a file?',
                options: ['wc -l', 'count -l', 'lines', 'lc'],
                correct: 0
            }
        ],
        steps: [
            {
                instruction: 'Create a file called "notes.txt".',
                hint: 'Use touch',
                validate: (cmd) => cmd === 'touch notes.txt',
                success: 'Empty file created'
            },
            {
                instruction: 'Write "Hello World" into notes.txt using echo and output redirection.',
                hint: 'Use echo text > filename',
                validate: (cmd) => cmd.includes('echo') && cmd.includes('Hello World') && cmd.includes('>') && cmd.includes('notes.txt'),
                success: 'Text written to file! > redirects output'
            },
            {
                instruction: 'Display the contents of notes.txt.',
                hint: 'Use cat to display file contents',
                validate: (cmd) => cmd === 'cat notes.txt',
                success: 'cat shows the file contents'
            },
            {
                instruction: 'Append "Welcome to Linux" to notes.txt without overwriting.',
                hint: 'Use echo with >> to append',
                validate: (cmd) => cmd.includes('echo') && cmd.includes('>>') && cmd.includes('notes.txt'),
                success: 'Text appended! >> adds to the end of files'
            },
            {
                instruction: 'Display notes.txt again to see both lines.',
                hint: 'Use cat',
                validate: (cmd) => cmd === 'cat notes.txt',
                success: 'Both lines are now in the file'
            },
            {
                instruction: 'Count the number of lines in notes.txt.',
                hint: 'Use wc -l filename',
                validate: (cmd) => cmd.includes('wc') && cmd.includes('notes.txt'),
                success: 'wc counts words, lines, and characters'
            },
            {
                instruction: 'Search for the word "Linux" in notes.txt.',
                hint: 'Use grep pattern filename',
                validate: (cmd) => cmd.includes('grep') && cmd.includes('Linux') && cmd.includes('notes.txt'),
                success: 'grep searches for patterns in files'
            }
        ]
    },
    {
        id: 'day2-permissions',
        title: 'File Permissions',
        description: 'Understand and manage Linux file permissions',
        quiz: [
            {
                question: 'What does chmod stand for?',
                options: ['Change mode', 'Change modify', 'Check mode', 'Character mode'],
                correct: 0
            },
            {
                question: 'What does the permission 755 mean?',
                options: ['rwxr-xr-x', 'rwxrwxr-x', 'r-xr-xr-x', 'rwxr--r--'],
                correct: 0
            },
            {
                question: 'Which permission number represents read+write?',
                options: ['5', '6', '7', '4'],
                correct: 1
            },
            {
                question: 'What does chmod +x do?',
                options: ['Add read', 'Add write', 'Add execute', 'Add all'],
                correct: 2
            },
            {
                question: 'What permission is needed to enter a directory?',
                options: ['Read', 'Write', 'Execute', 'All'],
                correct: 2
            },
            {
                question: 'What does 644 permission mean?',
                options: ['rw-r--r--', 'rwxr--r--', 'rw-rw-r--', 'r--r--r--'],
                correct: 0
            },
            {
                question: 'Which command changes file ownership?',
                options: ['chmod', 'chown', 'chgrp', 'owner'],
                correct: 1
            }
        ],
        steps: [
            {
                instruction: 'Create a file called "myfile.txt".',
                hint: 'Use touch',
                validate: (cmd) => cmd === 'touch myfile.txt',
                success: 'File created'
            },
            {
                instruction: 'List the file with detailed permissions using ls -l.',
                hint: 'Use ls -l to see permissions',
                validate: (cmd) => cmd === 'ls -l',
                success: 'You can see permissions like -rw-r--r-- (owner: read+write, group: read, others: read)'
            },
            {
                instruction: 'Create a script file called "script.sh".',
                hint: 'Use touch',
                validate: (cmd) => cmd === 'touch script.sh',
                success: 'Script file created'
            },
            {
                instruction: 'Make script.sh executable by adding execute permission.',
                hint: 'Use chmod +x filename',
                validate: (cmd) => cmd.includes('chmod') && cmd.includes('+x') && cmd.includes('script.sh'),
                success: '+x adds execute permission'
            },
            {
                instruction: 'Check the permissions again with ls -l.',
                hint: 'Use ls -l',
                validate: (cmd) => cmd === 'ls -l',
                success: 'script.sh now has x (execute) permission'
            },
            {
                instruction: 'Remove execute permission from script.sh.',
                hint: 'Use chmod -x filename',
                validate: (cmd) => cmd.includes('chmod') && cmd.includes('-x') && cmd.includes('script.sh'),
                success: '-x removes execute permission'
            },
            {
                instruction: 'Set myfile.txt permissions to 644 (owner: rw, group: r, others: r).',
                hint: 'Use chmod 644 filename',
                validate: (cmd) => cmd.includes('chmod') && cmd.includes('644') && cmd.includes('myfile.txt'),
                success: '644 is common for regular files (rw-r--r--)'
            },
            {
                instruction: 'Set script.sh permissions to 755 (owner: rwx, group: rx, others: rx).',
                hint: 'Use chmod 755 filename',
                validate: (cmd) => cmd.includes('chmod') && cmd.includes('755') && cmd.includes('script.sh'),
                success: '755 is common for executable scripts (rwxr-xr-x)'
            },
            {
                instruction: 'Make myfile.txt read-only for everyone using 444.',
                hint: 'Use chmod 444 filename',
                validate: (cmd) => cmd.includes('chmod') && cmd.includes('444') && cmd.includes('myfile.txt'),
                success: '444 makes files read-only (r--r--r--)'
            },
            {
                instruction: 'Verify all permission changes with ls -l.',
                hint: 'Use ls -l',
                validate: (cmd) => cmd === 'ls -l',
                success: 'You can see how numeric permissions translate to rwx notation'
            }
        ]
    },
    {
        id: 'day2-users-groups',
        title: 'Users and Groups',
        description: 'Learn about user and group management',
        quiz: [
            {
                question: 'Which command shows your current username?',
                options: ['username', 'whoami', 'user', 'me'],
                correct: 1
            },
            {
                question: 'What does UID stand for?',
                options: ['User Identity', 'User ID', 'Unique ID', 'Universal ID'],
                correct: 1
            },
            {
                question: 'Which command shows your user and group IDs?',
                options: ['whoami', 'id', 'uid', 'userinfo'],
                correct: 1
            },
            {
                question: 'What command lists all groups you belong to?',
                options: ['mygroups', 'groups', 'listgroups', 'showgroups'],
                correct: 1
            },
            {
                question: 'What is GID?',
                options: ['Group Identity', 'Group ID', 'Global ID', 'General ID'],
                correct: 1
            }
        ],
        steps: [
            {
                instruction: 'Find out your current username.',
                hint: 'Use whoami',
                validate: (cmd) => cmd === 'whoami',
                success: 'whoami shows your current username'
            },
            {
                instruction: 'Display your user ID (UID).',
                hint: 'Use id -u',
                validate: (cmd) => cmd === 'id -u',
                success: 'Your UID is a numeric identifier for your user'
            },
            {
                instruction: 'Display your primary group name.',
                hint: 'Use id -gn',
                validate: (cmd) => cmd === 'id -gn',
                success: 'Your primary group is usually the same as your username'
            },
            {
                instruction: 'Display your primary group ID (GID).',
                hint: 'Use id -g',
                validate: (cmd) => cmd === 'id -g',
                success: 'GID is the numeric identifier for your group'
            },
            {
                instruction: 'List all groups you belong to.',
                hint: 'Use the groups command',
                validate: (cmd) => cmd === 'groups',
                success: 'You can belong to multiple groups'
            },
            {
                instruction: 'Display detailed information about your user and groups.',
                hint: 'Use id without flags',
                validate: (cmd) => cmd === 'id',
                success: 'id shows UID, GID, and all group memberships'
            }
        ]
    },
    {
        id: 'day3-disk-management',
        title: 'Disk and Filesystem Management',
        description: 'Understand disks, partitions, and filesystems',
        quiz: [
            {
                question: 'Which command shows disk space usage?',
                options: ['disk', 'df', 'diskspace', 'space'],
                correct: 1
            },
            {
                question: 'What does df -h do?',
                options: ['Show hidden files', 'Show human-readable sizes', 'Show help', 'Show history'],
                correct: 1
            },
            {
                question: 'Which command shows directory disk usage?',
                options: ['du', 'diskusage', 'dirsize', 'size'],
                correct: 0
            },
            {
                question: 'What command lists block devices?',
                options: ['listblk', 'lsblk', 'blocks', 'devices'],
                correct: 1
            },
            {
                question: 'Which command shows mounted filesystems?',
                options: ['mounts', 'mount', 'showmount', 'filesystems'],
                correct: 1
            },
            {
                question: 'What are common Linux filesystem types?',
                options: ['NTFS, FAT32', 'ext4, xfs', 'HFS+, APFS', 'exFAT, FAT'],
                correct: 1
            }
        ],
        steps: [
            {
                instruction: 'List all block devices (disks and partitions) on the system.',
                knowledge: '📚 Block devices are storage devices (hard drives, SSDs, USB drives). lsblk shows them in tree format. Common device names: sda, sdb (SATA/SCSI), nvme0n1 (NVMe SSD), vda (virtual disk). Partitions are numbered: sda1, sda2, etc.',
                hint: 'Use lsblk',
                validate: (cmd) => cmd === 'lsblk',
                success: 'lsblk shows disks and their partitions in a tree structure'
            },
            {
                instruction: 'Display filesystem disk space usage.',
                knowledge: '📚 df (disk free) reports filesystem disk space. Shows: Filesystem (device), Size (total), Used, Available, Use% (percentage), Mounted on (mount point). Each filesystem is mounted at a directory (mount point).',
                hint: 'Use df',
                validate: (cmd) => cmd === 'df',
                success: 'df shows how much space is used and available on each filesystem'
            },
            {
                instruction: 'Display disk space in human-readable format (MB, GB).',
                knowledge: '📚 The -h flag makes output human-readable (K, M, G, T instead of bytes). Other useful df options: -T (show filesystem type), -i (show inode usage), -t type (show only specific filesystem type), -x type (exclude filesystem type).',
                hint: 'Use df -h',
                validate: (cmd) => cmd === 'df -h',
                success: 'Much easier to read with -h flag!'
            },
            {
                instruction: 'Show the filesystem type for each mounted filesystem.',
                knowledge: '📚 Common Linux filesystem types: ext4 (most common, default on many distros), xfs (high performance, RHEL default), btrfs (advanced features), tmpfs (RAM-based temporary), vfat/ntfs (Windows compatibility). Each has different features and use cases.',
                hint: 'Use df -T',
                validate: (cmd) => cmd === 'df -T',
                success: 'Common types include ext4, xfs, and tmpfs'
            },
            {
                instruction: 'Check disk usage of your home directory.',
                knowledge: '📚 du (disk usage) estimates file/directory space usage. Options: -s (summary only), -h (human-readable), -a (all files), --max-depth=N (limit depth). du -sh * shows size of each item in current directory. Useful for finding what\'s using disk space.',
                hint: 'Use du -sh ~',
                validate: (cmd) => cmd.includes('du') && (cmd.includes('~') || cmd.includes('/home')),
                success: 'du shows disk usage of directories'
            },
            {
                instruction: 'List all mounted filesystems.',
                knowledge: '📚 mount shows all mounted filesystems with device, mount point, filesystem type, and options. Mount points are directories where filesystems are attached (/, /home, /boot, etc.). Everything in Linux is under the root (/) filesystem tree.',
                hint: 'Use mount with no arguments',
                validate: (cmd) => cmd === 'mount',
                success: 'mount shows all currently mounted filesystems'
            },
            {
                instruction: 'Find the top 5 largest directories in /var.',
                knowledge: '📚 Combining commands: du -h /var | sort -rh | head -5 finds largest directories. du calculates sizes, sort -rh sorts by size (reverse, human-readable), head -5 shows top 5. Pipe (|) connects commands. Useful for troubleshooting disk space issues.',
                hint: 'Use du -h /var | sort -rh | head -5',
                validate: (cmd) => cmd.includes('du') && cmd.includes('/var') && cmd.includes('sort') && cmd.includes('head'),
                success: 'This helps identify what\'s consuming disk space'
            }
        ]
    },
    {
        id: 'day4-package-management',
        title: 'Package Management',
        description: 'Install, update, and remove software packages',
        quiz: [
            {
                question: 'Which package manager is used on Debian/Ubuntu?',
                options: ['yum', 'apt', 'rpm', 'dnf'],
                correct: 1
            },
            {
                question: 'Which package manager is used on RHEL/CentOS 8+?',
                options: ['apt', 'yum', 'dnf', 'dpkg'],
                correct: 2
            },
            {
                question: 'What command updates the package list on Ubuntu?',
                options: ['apt upgrade', 'apt update', 'apt refresh', 'apt sync'],
                correct: 1
            },
            {
                question: 'Which command shows if a service is running?',
                options: ['service status', 'systemctl status', 'check service', 'status service'],
                correct: 1
            },
            {
                question: 'What does systemctl enable do?',
                options: ['Start service now', 'Auto-start at boot', 'Restart service', 'Stop service'],
                correct: 1
            }
        ],
        steps: [
            {
                instruction: 'List all currently installed packages.',
                knowledge: '📚 Package managers: Debian/Ubuntu use apt/dpkg (.deb packages). RHEL/CentOS use yum/dnf/rpm (.rpm packages). Commands: apt list --installed, dpkg -l, dnf list installed, rpm -qa. Package managers handle dependencies automatically.',
                hint: 'Use dnf list installed or apt list --installed',
                validate: (cmd) => cmd.includes('dnf list') || cmd.includes('apt list'),
                success: 'This shows all software packages installed on your system'
            },
            {
                instruction: 'Search for information about the "httpd" package.',
                knowledge: '📚 Package info commands: apt show package (Debian/Ubuntu), dnf info package (RHEL/CentOS), apt search keyword, dnf search keyword. Shows description, version, dependencies, size, and repository source.',
                hint: 'Use dnf info httpd or apt show httpd',
                validate: (cmd) => cmd.includes('info httpd') || cmd.includes('show httpd'),
                success: 'httpd is the Apache web server'
            },
            {
                instruction: 'Update the package list to get latest package information.',
                knowledge: '📚 Updating packages: apt update (refresh package list), apt upgrade (install updates), apt full-upgrade (may remove packages). dnf check-update (check for updates), dnf upgrade (install updates). Always update package list before installing new software.',
                hint: 'Use sudo apt update or sudo dnf check-update',
                validate: (cmd) => cmd.includes('update') || cmd.includes('check-update'),
                success: 'This refreshes the package database'
            },
            {
                instruction: 'Install the httpd package.',
                knowledge: '📚 Installing packages: apt install package (Debian/Ubuntu), dnf install package (RHEL/CentOS). Use -y flag to auto-confirm. Can install multiple: apt install pkg1 pkg2 pkg3. dpkg -i file.deb or rpm -ivh file.rpm for local packages.',
                hint: 'Use sudo dnf install httpd or sudo apt install httpd',
                validate: (cmd) => cmd.includes('install httpd'),
                success: 'Package installed! httpd is now on your system'
            },
            {
                instruction: 'Check if httpd service is running.',
                knowledge: '📚 Service management: systemctl is used on modern Linux. systemctl status service (check status), systemctl start service (start), systemctl stop service (stop), systemctl restart service (restart), systemctl enable service (auto-start on boot), systemctl disable service (don\'t auto-start).',
                hint: 'Use systemctl status httpd',
                validate: (cmd) => cmd.includes('systemctl status httpd'),
                success: 'The service is installed but not started yet'
            },
            {
                instruction: 'Start the httpd service.',
                knowledge: '📚 Starting services: systemctl start service starts a service immediately. systemctl restart restarts a running service. systemctl reload reloads config without stopping. systemctl reload-or-restart tries reload, falls back to restart if needed.',
                hint: 'Use sudo systemctl start httpd',
                validate: (cmd) => cmd.includes('systemctl start httpd'),
                success: 'Service started! httpd is now running'
            },
            {
                instruction: 'Enable httpd to start automatically on boot.',
                knowledge: '📚 Enabling services: systemctl enable service creates symlinks so service starts at boot. systemctl disable removes auto-start. systemctl enable --now enables and starts immediately. systemctl is-enabled checks if enabled. systemctl list-unit-files shows all services.',
                hint: 'Use sudo systemctl enable httpd',
                validate: (cmd) => cmd.includes('systemctl enable httpd'),
                success: 'httpd will now start automatically when the system boots'
            },
            {
                instruction: 'Test the web server by accessing localhost.',
                hint: 'Use curl localhost',
                validate: (cmd) => cmd === 'curl localhost',
                success: 'You should see HTML output from the web server!'
            },
            {
                instruction: 'Stop the httpd service.',
                hint: 'Use sudo systemctl stop httpd',
                validate: (cmd) => cmd.includes('systemctl stop httpd'),
                success: 'Service stopped'
            },
            {
                instruction: 'Remove the httpd package.',
                knowledge: '📚 Removing packages: apt remove package (keep config files), apt purge package (remove everything), apt autoremove (remove unused dependencies). dnf remove package, dnf autoremove. dpkg -r removes, dpkg -P purges. rpm -e removes packages.',
                hint: 'Use sudo dnf remove httpd or sudo apt remove httpd',
                validate: (cmd) => cmd.includes('remove httpd'),
                success: 'Package uninstalled'
            }
        ]
    },
    {
        id: 'day4-networking',
        title: 'Networking Commands',
        description: 'Test connectivity and troubleshoot network issues',
        quiz: [
            {
                question: 'Which command tests network connectivity?',
                options: ['test', 'ping', 'connect', 'check'],
                correct: 1
            },
            {
                question: 'What does curl do?',
                options: ['Copy files', 'Transfer data from URLs', 'Create URLs', 'List URLs'],
                correct: 1
            },
            {
                question: 'Which command performs DNS lookups?',
                options: ['dns', 'lookup', 'dig', 'resolve'],
                correct: 2
            },
            {
                question: 'What does netstat show?',
                options: ['Network statistics', 'Network speed', 'Network cards', 'Network cables'],
                correct: 0
            },
            {
                question: 'Which command shows processes using network ports?',
                options: ['ps', 'top', 'lsof', 'netstat'],
                correct: 2
            }
        ],
        steps: [
            {
                instruction: 'Test network connectivity to google.com using ping.',
                hint: 'Use ping hostname',
                validate: (cmd) => cmd.includes('ping'),
                success: 'ping sends ICMP packets to test connectivity'
            },
            {
                instruction: 'Fetch the homepage of amazon.com using curl.',
                hint: 'Use curl hostname',
                validate: (cmd) => cmd.includes('curl'),
                success: 'curl retrieves content from URLs'
            },
            {
                instruction: 'Download a webpage using wget.',
                hint: 'Use wget URL',
                validate: (cmd) => cmd.includes('wget'),
                success: 'wget downloads files from the web'
            },
            {
                instruction: 'Perform a DNS lookup for amazon.com.',
                hint: 'Use dig hostname',
                validate: (cmd) => cmd.includes('dig'),
                success: 'dig queries DNS servers for domain information'
            },
            {
                instruction: 'Display all active network connections.',
                hint: 'Use netstat -tuln',
                validate: (cmd) => cmd.includes('netstat'),
                success: 'netstat shows network connections and listening ports'
            },
            {
                instruction: 'Show which process is using port 80.',
                hint: 'Use lsof -i :80',
                validate: (cmd) => cmd.includes('lsof'),
                success: 'lsof lists open files and network connections'
            }
        ]
    },
    {
        id: 'day4-process-management',
        title: 'Process Management',
        description: 'Monitor and manage running processes',
        quiz: [
            {
                question: 'What does PID stand for?',
                options: ['Process Identity', 'Process ID', 'Program ID', 'Program Identity'],
                correct: 1
            },
            {
                question: 'Which command shows real-time process information?',
                options: ['ps', 'top', 'proc', 'list'],
                correct: 1
            },
            {
                question: 'What does the & symbol do at the end of a command?',
                options: ['Stop it', 'Background it', 'Speed it up', 'Repeat it'],
                correct: 1
            },
            {
                question: 'Which command brings a background job to foreground?',
                options: ['bg', 'fg', 'front', 'forward'],
                correct: 1
            },
            {
                question: 'What signal does kill -9 send?',
                options: ['SIGTERM', 'SIGKILL', 'SIGSTOP', 'SIGHUP'],
                correct: 1
            },
            {
                question: 'Where is detailed CPU information stored?',
                options: ['/proc/cpu', '/proc/cpuinfo', '/sys/cpu', '/etc/cpuinfo'],
                correct: 1
            }
        ],
        steps: [
            {
                instruction: 'List all currently running processes.',
                knowledge: '📚 The ps command displays process status. Each process has a PID (Process ID). Common options: ps (current session), ps -e (all processes), ps -u username (user\'s processes), ps aux (detailed view of all processes).',
                hint: 'Use ps',
                validate: (cmd) => cmd === 'ps' || cmd === 'ps aux',
                success: 'ps shows process information'
            },
            {
                instruction: 'Display detailed process information for all users.',
                knowledge: '📚 ps aux shows: USER (owner), PID (process ID), %CPU (CPU usage), %MEM (memory usage), VSZ (virtual memory), RSS (physical memory), TTY (terminal), STAT (state), START (start time), TIME (CPU time), COMMAND (command name).',
                hint: 'Use ps aux',
                validate: (cmd) => cmd === 'ps aux',
                success: 'aux shows all processes with detailed information'
            },
            {
                instruction: 'View real-time process information.',
                knowledge: '📚 top is an interactive process viewer showing live system stats. Key info: load average (1, 5, 15 min), CPU usage (us=user, sy=system, id=idle, wa=I/O wait), memory usage. Press q to quit, M to sort by memory, P to sort by CPU, k to kill a process.',
                hint: 'Use top',
                validate: (cmd) => cmd === 'top',
                success: 'top shows live CPU and memory usage'
            },
            {
                instruction: 'Display system uptime and load average.',
                knowledge: '📚 uptime shows: current time, how long system has been running, number of users, and load average. Load average shows system load over 1, 5, and 15 minutes. Values below the number of CPU cores indicate healthy performance.',
                hint: 'Use uptime',
                validate: (cmd) => cmd === 'uptime',
                success: 'uptime shows how long the system has been running'
            },
            {
                instruction: 'Show memory usage statistics.',
                knowledge: '📚 free displays memory usage. Key metrics: total (installed RAM), used (memory in use), free (unused), buff/cache (used for buffers/cache), available (memory available for new apps). The -h flag shows human-readable format (MB/GB).',
                hint: 'Use free -h',
                validate: (cmd) => cmd.includes('free'),
                success: 'free shows RAM and swap usage'
            },
            {
                instruction: 'View detailed CPU information from /proc filesystem.',
                knowledge: '📚 /proc/cpuinfo contains detailed CPU info: processor (logical CPU #), model name (CPU model), cpu MHz (current frequency), cache size, cpu cores (physical cores), siblings (logical processors with hyperthreading), flags (CPU features like sse, avx, vmx for virtualization).',
                hint: 'Use cat /proc/cpuinfo',
                validate: (cmd) => cmd === 'cat /proc/cpuinfo',
                success: '/proc/cpuinfo shows detailed CPU specifications'
            },
            {
                instruction: 'View detailed memory information from /proc filesystem.',
                knowledge: '📚 /proc/meminfo shows detailed memory stats: MemTotal (total RAM), MemFree (free RAM), MemAvailable (available for new apps), Buffers (temporary disk block storage), Cached (file cache), SwapTotal/SwapFree (swap space), Dirty (memory waiting to be written to disk).',
                hint: 'Use cat /proc/meminfo',
                validate: (cmd) => cmd === 'cat /proc/meminfo',
                success: '/proc/meminfo shows detailed memory information'
            },
            {
                instruction: 'Start a background process by running "sleep 100" in the background.',
                knowledge: '📚 Background processes: Add & at end to background a process (command &). Ctrl-Z suspends foreground process. bg resumes suspended process in background. fg brings background process to foreground. jobs lists background jobs. kill %1 kills job #1.',
                hint: 'Use sleep 100 &',
                validate: (cmd) => cmd === 'sleep 100 &',
                success: 'Process started in background! The & symbol backgrounds processes'
            },
            {
                instruction: 'List all background jobs.',
                knowledge: '📚 jobs command shows background jobs with job numbers. + indicates current job (last stopped or started), - indicates previous job. Use %1, %2 to refer to jobs. %% or %+ refers to current job, %- refers to previous job.',
                hint: 'Use jobs',
                validate: (cmd) => cmd === 'jobs',
                success: 'jobs shows all background processes in this shell'
            },
            {
                instruction: 'Kill the background sleep process using its job number.',
                knowledge: '📚 Killing processes: kill sends signals to processes. Default is SIGTERM (15) for graceful termination. kill -9 (SIGKILL) forces immediate termination. Can use PID (kill 1234) or job number (kill %1). Ctrl-C kills foreground process.',
                hint: 'Use kill %1',
                validate: (cmd) => cmd.includes('kill %'),
                success: 'Process terminated! kill %1 kills job number 1'
            }
        ]
    },
    {
        id: 'day4-log-analysis',
        title: 'Log Analysis',
        description: 'View and search system logs',
        quiz: [
            {
                question: 'Where are system logs typically stored?',
                options: ['/var/logs', '/var/log', '/etc/log', '/sys/log'],
                correct: 1
            },
            {
                question: 'Which command queries systemd journal?',
                options: ['journal', 'journalctl', 'systemlog', 'logctl'],
                correct: 1
            },
            {
                question: 'What does tail -f do?',
                options: ['Show first lines', 'Follow log in real-time', 'Find text', 'Filter logs'],
                correct: 1
            },
            {
                question: 'Which command searches for patterns in files?',
                options: ['find', 'search', 'grep', 'locate'],
                correct: 2
            },
            {
                question: 'Where are authentication logs on Debian/Ubuntu?',
                options: ['/var/log/auth', '/var/log/auth.log', '/var/log/secure', '/etc/auth.log'],
                correct: 1
            },
            {
                question: 'What does dmesg show?',
                options: ['Disk messages', 'Kernel messages', 'System messages', 'Error messages'],
                correct: 1
            }
        ],
        steps: [
            {
                instruction: 'View system logs using journalctl.',
                knowledge: '📚 Log locations: /var/log/syslog (Debian/Ubuntu general logs), /var/log/messages (RHEL/CentOS), /var/log/auth.log (authentication), /var/log/kern.log (kernel), /var/log/apache2/ (Apache), /var/log/secure (RHEL auth). journalctl queries systemd journal.',
                hint: 'Use journalctl',
                validate: (cmd) => cmd.includes('journalctl'),
                success: 'journalctl shows systemd logs'
            },
            {
                instruction: 'View logs from the current boot only.',
                knowledge: '📚 journalctl options: -b (current boot), -u service (specific service), -f (follow/tail), -n 50 (last 50 lines), -p err (priority: emerg/alert/crit/err/warning/notice/info/debug), --since "1 hour ago" (time filter), -k (kernel messages).',
                hint: 'Use journalctl -b',
                validate: (cmd) => cmd.includes('journalctl') && cmd.includes('-b'),
                success: '-b shows logs since last boot'
            },
            {
                instruction: 'Search logs for errors and warnings.',
                knowledge: '📚 Searching logs: grep searches for patterns. Use grep -i (case-insensitive), grep -n (line numbers), grep -C 3 (3 lines context), grep -E "error|warning" (multiple patterns), grep -v (invert/exclude). Pipe journalctl output to grep for filtering.',
                hint: 'Use journalctl | grep -iE "err|warn|fail"',
                validate: (cmd) => cmd.includes('journalctl') && cmd.includes('grep'),
                success: 'Combining journalctl with grep helps find specific issues'
            },
            {
                instruction: 'View the last 20 lines of a log file.',
                knowledge: '📚 tail command: Shows end of files. tail -n 20 (last 20 lines), tail -f (follow in real-time), tail -fn 50 (follow with 50 lines). head shows beginning. cat shows entire file. less allows scrolling (press q to quit).',
                hint: 'Use tail -n 20 /var/log/syslog',
                validate: (cmd) => cmd.includes('tail') && cmd.includes('-n') && cmd.includes('20'),
                success: 'tail shows the end of files'
            },
            {
                instruction: 'Follow a log file in real-time (like tail -f).',
                knowledge: '📚 Real-time monitoring: tail -f follows log files as they grow. Press Ctrl-C to stop. Useful for watching logs during troubleshooting. Can follow multiple files: tail -f file1 file2. journalctl -f does the same for systemd logs.',
                hint: 'Use tail -f /var/log/syslog',
                validate: (cmd) => cmd.includes('tail') && cmd.includes('-f'),
                success: 'tail -f continuously shows new log entries'
            },
            {
                instruction: 'Search for the word "failed" in system logs.',
                knowledge: '📚 grep patterns: grep "text" file searches for exact text. Use grep -i for case-insensitive. grep -c counts matches. grep -r searches recursively in directories. egrep or grep -E for regex patterns. Example: grep "Failed password" /var/log/auth.log finds failed login attempts.',
                hint: 'Use grep failed /var/log/syslog',
                validate: (cmd) => cmd.includes('grep') && cmd.includes('failed'),
                success: 'grep searches for patterns in files'
            },
            {
                instruction: 'Count how many times "error" appears in the system log.',
                knowledge: '📚 Counting with grep: grep -c counts matching lines. wc -l counts lines. Combine with pipes: grep "error" file | wc -l counts error lines. sort | uniq -c counts unique occurrences. awk can count and analyze patterns.',
                hint: 'Use grep -c error /var/log/syslog',
                validate: (cmd) => cmd.includes('grep') && cmd.includes('-c') && cmd.includes('error'),
                success: 'grep -c counts matching lines'
            },
            {
                instruction: 'View authentication logs to see login attempts.',
                knowledge: '📚 Authentication logs: /var/log/auth.log (Debian/Ubuntu) or /var/log/secure (RHEL/CentOS) contain login attempts, sudo usage, SSH connections. Commands: last (successful logins), lastb (failed logins), who (currently logged in), w (who and what they\'re doing).',
                hint: 'Use cat /var/log/auth.log or tail /var/log/auth.log',
                validate: (cmd) => cmd.includes('auth.log') || cmd.includes('secure'),
                success: 'Authentication logs show login activity and security events'
            },
            {
                instruction: 'Find all failed SSH login attempts.',
                knowledge: '📚 Security analysis: grep "Failed password" /var/log/auth.log shows failed SSH attempts. grep "Accepted" shows successful logins. Combine with awk to extract IPs: grep "Failed" auth.log | awk \'{print $(NF-3)}\' | sort | uniq -c | sort -rn shows top attacking IPs.',
                hint: 'Use grep "Failed password" /var/log/auth.log',
                validate: (cmd) => cmd.includes('grep') && cmd.includes('Failed') && cmd.includes('auth.log'),
                success: 'This helps identify brute force attack attempts'
            },
            {
                instruction: 'View kernel messages using dmesg.',
                knowledge: '📚 dmesg shows kernel ring buffer messages: hardware detection, driver loading, system errors. Options: dmesg -T (human-readable timestamps), dmesg -w (follow), dmesg -l err (only errors), dmesg | grep -i usb (filter for USB). Useful for hardware troubleshooting.',
                hint: 'Use dmesg',
                validate: (cmd) => cmd === 'dmesg' || cmd.includes('dmesg'),
                success: 'dmesg shows kernel and hardware messages'
            }
        ]
    },
    {
        id: 'day4-troubleshooting',
        title: 'System Troubleshooting',
        description: 'Debug common Linux issues',
        quiz: [
            {
                question: 'What is a common cause of service failures?',
                options: ['Full disk', 'Too much RAM', 'Fast CPU', 'Good network'],
                correct: 0
            },
            {
                question: 'Which command checks disk space?',
                options: ['disk', 'space', 'df', 'ds'],
                correct: 2
            },
            {
                question: 'What does lsof help identify?',
                options: ['Large files', 'Open files and ports', 'Lost files', 'Old files'],
                correct: 1
            },
            {
                question: 'How do you restart a failed service?',
                options: ['service restart', 'systemctl restart', 'restart service', 'service start'],
                correct: 1
            },
            {
                question: 'Which command shows listening ports?',
                options: ['ports', 'netstat -tuln', 'showports', 'listports'],
                correct: 1
            }
        ],
        steps: [
            {
                instruction: 'Check if a service is running.',
                hint: 'Use systemctl status service-name',
                validate: (cmd) => cmd.includes('systemctl status'),
                success: 'systemctl status shows service state and recent logs'
            },
            {
                instruction: 'Restart a service that has stopped.',
                hint: 'Use sudo systemctl restart service-name',
                validate: (cmd) => cmd.includes('systemctl restart'),
                success: 'restart stops and starts a service'
            },
            {
                instruction: 'Check which ports are listening for connections.',
                hint: 'Use netstat -tuln or ss -tuln',
                validate: (cmd) => cmd.includes('netstat') || cmd.includes('ss'),
                success: 'This shows which services are accepting network connections'
            },
            {
                instruction: 'Find which process is using a specific port.',
                hint: 'Use lsof -i :port-number',
                validate: (cmd) => cmd.includes('lsof'),
                success: 'lsof helps identify port conflicts'
            },
            {
                instruction: 'Check disk space to see if the system is full.',
                hint: 'Use df -h',
                validate: (cmd) => cmd === 'df -h',
                success: 'Full disks are a common cause of system issues'
            },
            {
                instruction: 'Find large files consuming disk space.',
                hint: 'Use du -sh /* to check directory sizes',
                validate: (cmd) => cmd.includes('du'),
                success: 'du helps locate what\'s using disk space'
            },
            {
                instruction: 'Check system resource usage (CPU, memory).',
                hint: 'Use top or htop',
                validate: (cmd) => cmd === 'top' || cmd === 'htop',
                success: 'High CPU or memory usage can cause performance issues'
            }
        ]
    },
    {
        id: 'day5-task-scheduling',
        title: 'Task Scheduling with Cron',
        description: 'Schedule automated tasks using cron',
        quiz: [
            {
                question: 'What command edits your crontab?',
                options: ['cron -e', 'crontab -e', 'edit-cron', 'cronjob -e'],
                correct: 1
            },
            {
                question: 'What does "* * * * *" mean in cron?',
                options: ['Every hour', 'Every day', 'Every minute', 'Every week'],
                correct: 2
            },
            {
                question: 'Which field in crontab represents the hour?',
                options: ['First', 'Second', 'Third', 'Fourth'],
                correct: 1
            },
            {
                question: 'What does @daily mean in crontab?',
                options: ['Run every hour', 'Run at midnight', 'Run every minute', 'Run every week'],
                correct: 1
            },
            {
                question: 'How do you list your cron jobs?',
                options: ['cron -l', 'crontab -l', 'list-cron', 'cronjob -l'],
                correct: 1
            },
            {
                question: 'What does "0 2 * * *" mean?',
                options: ['Every 2 hours', 'At 2:00 AM daily', 'Every 2 minutes', 'At 2:00 PM daily'],
                correct: 1
            }
        ],
        steps: [
            {
                instruction: 'List your current cron jobs.',
                knowledge: '📚 Cron is a time-based job scheduler. crontab manages your scheduled jobs. Commands: crontab -l (list jobs), crontab -e (edit jobs), crontab -r (remove all jobs). Each user has their own crontab. Root can edit other users\' crontabs with crontab -u username -e.',
                hint: 'Use crontab -l',
                validate: (cmd) => cmd === 'crontab -l',
                success: 'crontab -l lists your scheduled cron jobs'
            },
            {
                instruction: 'View the system-wide cron directory.',
                knowledge: '📚 Cron directories: /etc/cron.d/ (system cron jobs), /etc/cron.daily/ (daily scripts), /etc/cron.hourly/ (hourly scripts), /etc/cron.weekly/ (weekly scripts), /etc/cron.monthly/ (monthly scripts). User crontabs are in /var/spool/cron/.',
                hint: 'Use ls /etc/cron.d',
                validate: (cmd) => cmd.includes('ls') && cmd.includes('/etc/cron'),
                success: 'System cron jobs are stored in /etc/cron.d/'
            },
            {
                instruction: 'Create a test script that will be scheduled.',
                knowledge: '📚 Cron format: minute hour day month weekday command. Each field: minute (0-59), hour (0-23), day (1-31), month (1-12), weekday (0-6, 0=Sunday). * means any value. */5 means every 5 units. 0,30 means at 0 and 30.',
                hint: 'Use echo "echo Hello from cron" > ~/test-cron.sh',
                validate: (cmd) => cmd.includes('echo') && cmd.includes('test-cron.sh'),
                success: 'Script created for testing cron'
            },
            {
                instruction: 'Make the script executable.',
                knowledge: '📚 Scripts run by cron must be executable. Use chmod +x to add execute permission. Cron runs with limited environment variables, so use full paths in scripts (/usr/bin/command instead of just command).',
                hint: 'Use chmod +x ~/test-cron.sh',
                validate: (cmd) => cmd.includes('chmod') && cmd.includes('+x') && cmd.includes('test-cron.sh'),
                success: 'Script is now executable'
            },
            {
                instruction: 'Understand the cron time format: * * * * * command',
                knowledge: '📚 Cron time fields: * * * * * = minute hour day month weekday. Examples: "0 2 * * *" = 2:00 AM daily, "*/15 * * * *" = every 15 minutes, "0 9 * * 1" = 9 AM every Monday, "0 0 1 * *" = midnight on 1st of month, "30 14 * * 1-5" = 2:30 PM weekdays.',
                hint: 'This is informational - type "ok" to continue',
                validate: (cmd) => cmd.toLowerCase().includes('ok') || cmd.includes('crontab'),
                success: 'Understanding cron format is essential for scheduling'
            },
            {
                instruction: 'Learn about cron keywords.',
                knowledge: '📚 Cron keywords (shortcuts): @yearly or @annually (0 0 1 1 *), @monthly (0 0 1 * *), @weekly (0 0 * * 0), @daily or @midnight (0 0 * * *), @hourly (0 * * * *), @reboot (run at startup). Example: @daily /path/to/backup.sh',
                hint: 'Type "ok" to continue',
                validate: (cmd) => cmd.toLowerCase().includes('ok') || cmd.includes('crontab'),
                success: 'Keywords make crontab entries more readable'
            },
            {
                instruction: 'Check if the cron service is running.',
                knowledge: '📚 Cron service: On systemd systems, it\'s called cron (Debian/Ubuntu) or crond (RHEL/CentOS). Check status: systemctl status cron. Start: sudo systemctl start cron. Enable at boot: sudo systemctl enable cron. Cron logs are in /var/log/cron or /var/log/syslog.',
                hint: 'Use systemctl status cron',
                validate: (cmd) => cmd.includes('systemctl') && cmd.includes('status') && cmd.includes('cron'),
                success: 'Cron service must be running for scheduled jobs to execute'
            },
            {
                instruction: 'View cron logs to see job execution.',
                knowledge: '📚 Cron logging: Debian/Ubuntu logs to /var/log/syslog, RHEL/CentOS to /var/log/cron. View with: grep CRON /var/log/syslog or journalctl -u cron. Cron emails output to user by default. Redirect output to file: command > /path/to/log 2>&1',
                hint: 'Use grep CRON /var/log/syslog or journalctl -u cron',
                validate: (cmd) => (cmd.includes('grep') && cmd.includes('CRON')) || (cmd.includes('journalctl') && cmd.includes('cron')),
                success: 'Cron logs help verify jobs are running'
            },
            {
                instruction: 'Understand output redirection in cron jobs.',
                knowledge: '📚 Cron output: By default, cron emails output to the user. Redirect to file: command > /path/to/log 2>&1 (stdout and stderr). Discard output: command > /dev/null 2>&1. Append to log: command >> /path/to/log 2>&1. Set MAILTO="" in crontab to disable emails.',
                hint: 'Type "ok" to continue',
                validate: (cmd) => cmd.toLowerCase().includes('ok'),
                success: 'Proper output handling prevents mailbox overflow'
            },
            {
                instruction: 'Practice: What cron entry runs a backup every day at 2 AM?',
                knowledge: '📚 Daily backup example: "0 2 * * * /usr/local/bin/backup.sh > /var/log/backup.log 2>&1" runs backup.sh at 2:00 AM daily and logs output. The 0 is minute, 2 is hour, * * * means any day/month/weekday.',
                hint: 'The format is: 0 2 * * * command',
                validate: (cmd) => cmd.includes('0 2 * * *') || cmd.includes('@daily'),
                success: 'Correct! 0 2 * * * runs at 2:00 AM every day'
            }
        ]
    }
];
