document.addEventListener('DOMContentLoaded', function() {
    // Button event listeners  
    const startButton    = document.getElementById('start-button');
    const shownButton    = document.getElementById('shown');
    const downloadButton = document.getElementById('download');
    const contactButton  = document.getElementById('contact');
    const creditButton   = document.getElementById('credit');
    const crowdfundingButton = document.getElementById('crowdfunding');
    
    if(startButton) {
        startButton.addEventListener('click', function() {
            window.location.href = 'start_game.html';
        });
    }
    
    if(shownButton) {
        shownButton.addEventListener('click', function() {
            window.location.href = 'game_shown.html';
        });
    }
    
    if(downloadButton) {
        downloadButton.addEventListener('click', function() {
            window.location.href = 'download_game.html';
        });
    }
    
    if(contactButton) {
        contactButton.addEventListener('click', function() {
            window.location.href = 'contact_us.html';
        });
    }
    
    if(creditButton) {
        creditButton.addEventListener('click', function() {
            window.location.href = 'group_members.html';
        });
    }

    if(crowdfundingButton) {
        crowdfundingButton.addEventListener('click', function() {
            window.location.href = 'crowdfunding.html';
        });
    }
    
    // Language switcher code  
    const languageSelector = document.getElementById('language-selector');
    if(languageSelector) {
        languageSelector.addEventListener('change', function() {
            setLanguage(this.value);
        });
    }
    
    // Mute/Unmute background music functionality
    const bgMusic = document.getElementById('bg-music');
    const closeMusicButton = document.getElementById('close-music');
    if (bgMusic && closeMusicButton) {
        closeMusicButton.addEventListener('click', function() {
            if (!bgMusic.paused) {
                bgMusic.pause();
                closeMusicButton.textContent = "Music Off";
            } else {
                bgMusic.play();
                closeMusicButton.textContent = "Mute Music";
            }
        });
    }
    
    // Extended translation dictionary with rewritten texts for each page
    const translations = {

        // For the index (general) page
        index: {
            headerH1: { en: "Slumberland", cn: "沉睡之地" },
            headerP: { en: "Your adventure begins here!", cn: "你的冒险从这里开始！" },
            startButton: { en: "Start Game", cn: "开始游戏" },
            shownButton: { en: "Game Shown", cn: "游戏展示" },
            downloadButton: { en: "Download Game", cn: "下载游戏" },
            contactButton: { en: "Contact Us", cn: "联系我们" },
            creditButton: { en: "Group Members", cn: "团队成员" },
            crowdfundingButton: { en: "Crowdfunding Campaign", cn: "众筹活动" },
            returnHome: { en: "Return Home", cn: "返回首页" }
        },
        // For the group members page
        group_members: {
            headerH1: { en: "Group Members", cn: "团队成员" },
            headerP: { en: "Meet the creative minds behind Slumberland", cn: "认识沉睡之地背后的创意人才" },
            returnHome: { en: "Return Home", cn: "返回首页" },
            membersList: [
                { en: "Nico Wang: team manager", cn: "王浩辰：团队经理" },
                { en: "Ray Wang: programmer, team deputy manager", cn: "王浩瑞：程序员，团队副经理" },
                { en: "Hardy Hu: programmer, musician", cn: "扈彧豪：程序员，音乐创作家" },
                { en: "Colin Hu: combat designer", cn: "胡添睿：战斗设计师" },
                { en: "Drake Guo: world view, scriptwriter", cn: "郭梓峰：世界观，编剧" },
                { en: "Jayden Liu: world view, scriptwriter", cn: "刘玉沐：世界观，编剧" },
                { en: "Connie Chen: UI designer, drawer", cn: "陈鎏炫：UI设计师，画师" },
                { en: "George Zhu: level designer, terrain designer", cn: "朱冬青：关卡设计师，地形设计师" },
                { en: "Mr. Brown: advisor", cn: "布朗老师：顾问" }
            ]
        },

        // For the start_game page
        start_game: {
           headerH1: { en: "Play Now", cn: "立即游戏" },
            headerP: { en: "Step into the world of Slumberland", cn: "走进沉睡之地的世界" },
            sectionH2: { en: "Welcome Adventurer", cn: "欢迎，冒险者" },
            sectionP: { 
                en: "Embark on a journey filled with mystery and wonder as you navigate through treacherous lands in search of glory.", 
                cn: "踏上一段充满神秘与奇迹的旅程，在危险的土地中寻找荣耀。"
            }
        },

        // For the game_shown page
        game_shown: {
            headerH1: { en: "Game Showcase", cn: "游戏展示" },
            containerP: { en: "Discover the details of our game", cn: "探索我们游戏的精彩细节" }
        },

        // For the contact_us page
        contact_us: {
            headerH1: { en: "Contact Us", cn: "联系我们" },
            headerP: { en: "We're here to assist you", cn: "我们随时为您服务" },
            contactInfoP: { 
                en: "If you have any questions about the game or are interested in joining our team, feel free to contact us!", 
                cn: "如果您对游戏有任何疑问或有兴趣加入我们的团队，请随时联系我们！" 
            },
            h2: { 
                en: ["Email", "Phone"],
                cn: ["电子邮箱", "电话"]
            },
            email: { en: "nicolat_777@outlook.com", cn: "nicolat_777@outlook.com" },
            phone: { en: "+86 13581971721", cn: "+86 13581971721" }
        },

        // For the download_game page
        download_game: {
            headerH1: { en: "Download Game", cn: "下载游戏" },
            headerP: { en: "Get your hands on the latest version of Slumberland", cn: "立即获取最新版本的沉睡之地" },
            downloadButtons: {
                en: ["Download Slumberland v1.0", "Download Slumberland v1.1"],
                cn: ["下载沉睡之地 v1.0", "下载沉睡之地 v1.1"]
            }
        },
        
        // For the crowdfunding page
        crowdfunding: {
            headerH1: { en: "Crowdfunding Campaign", cn: "众筹活动" },
            headerP: { en: "Support Us", cn: "支持我们" },
            info1: { 
                en: "Support our crowdfunding campaign to bring more magic to Slumberland! Your contribution will help us add new features, enhance graphics, and expand content. Join our community and make the game even better!", 
                cn: "支持我们的众筹活动，为沉睡之地带来更多魔法！您的贡献将帮助我们添加新功能、增强图形和扩展内容。加入我们的社区，让游戏变得更好！"
            },
            info2: { 
                en: "Please leave your contact information (email) at the remark when you are donating, we will send the demo of the game to let you be the first to try.", 
                cn: "捐助时请在备注中留下您的联系方式（电子邮件），我们将给您发送游戏的试玩版。"
            }
        }
    };
    
    // Function to update the text on the current page based on language
    function setLanguage(lang) {
        // For the start_game page
        if(document.getElementById('game-intro')) {
            const header = document.querySelector('header');
            if(header) {
                const headerH1 = header.querySelector("h1");
                const headerP  = header.querySelector("p");
                if(headerH1 && headerP) {
                    headerH1.textContent = translations.start_game.headerH1[lang] || translations.start_game.headerH1.en;
                    headerP.textContent  = translations.start_game.headerP[lang] || translations.start_game.headerP.en;
                }
            }
            const gameIntroH2 = document.querySelector('#game-intro h2');
            const gameIntroP  = document.querySelector('#game-intro p');
            if(gameIntroH2 && gameIntroP) {
                gameIntroH2.textContent = translations.start_game.sectionH2[lang] || translations.start_game.sectionH2.en;
                gameIntroP.textContent  = translations.start_game.sectionP[lang] || translations.start_game.sectionP.en;
            }
        }
        
        // For the game_shown page
        if(document.querySelector('.container') && document.title.indexOf("Game Showcase") !== -1) {
            const container = document.querySelector('.container');
            const headerH1 = container.querySelector("h1");
            const paragraph = container.querySelector("p");
            if(headerH1 && paragraph) {
                headerH1.textContent = translations.game_shown.headerH1[lang] || translations.game_shown.headerH1.en;
                paragraph.textContent = translations.game_shown.containerP[lang] || translations.game_shown.containerP.en;
            }
        }
        
        // For the contact_us page
        if(document.getElementById('contact-info')) {
            const header = document.querySelector('header');
            if(header) {
                const headerH1 = header.querySelector("h1");
                const headerP  = header.querySelector("p");
                if(headerH1 && headerP) {
                    headerH1.textContent = translations.contact_us.headerH1[lang] || translations.contact_us.headerH1.en;
                    headerP.textContent  = translations.contact_us.headerP[lang] || translations.contact_us.headerP.en;
                }
            }
            const contactInfoP = document.querySelector('.contact-info');
            if(contactInfoP) {
                contactInfoP.textContent = translations.contact_us.contactInfoP[lang] || translations.contact_us.contactInfoP.en;
            }
            const h2Elements = document.querySelectorAll('#contact-info h2');
            if(h2Elements.length === translations.contact_us.h2.en.length) {
                h2Elements.forEach((elem, index) => {
                    elem.textContent = translations.contact_us.h2[lang][index] || translations.contact_us.h2.en[index];
                });
            }
            const emailP = document.querySelector('#contact-info p:nth-of-type(1)');
            const phoneP = document.querySelector('#contact-info p:nth-of-type(2)');
            if(emailP) {
                emailP.textContent = translations.contact_us.email[lang] || translations.contact_us.email.en;
            }
            if(phoneP) {
                phoneP.textContent = translations.contact_us.phone[lang] || translations.contact_us.phone.en;
            }
        }
        
        // For the download_game page
        if(document.getElementById('download-links')) {
            const header = document.querySelector('header');
            if(header) {
                const headerH1 = header.querySelector("h1");
                const headerP  = header.querySelector("p");
                if(headerH1 && headerP) {
                    headerH1.textContent = translations.download_game.headerH1[lang] || translations.download_game.headerH1.en;
                    headerP.textContent  = translations.download_game.headerP[lang] || translations.download_game.headerP.en;
                }
            }
            const downloadButtons = document.querySelectorAll('.download_button');
            if(downloadButtons.length === translations.download_game.downloadButtons.en.length) {
                downloadButtons.forEach((btn, index) => {
                    btn.textContent = translations.download_game.downloadButtons[lang][index] || translations.download_game.downloadButtons.en[index];
                });
            }
        }
        
        // For the index page
        if(document.getElementById('start-game') && !document.getElementById('game-intro')) {
            const headerH1 = document.querySelector('header h1');
            const headerP  = document.querySelector('header p');
            if(headerH1 && headerP) {
                headerH1.textContent = translations.index.headerH1[lang] || translations.index.headerH1.en;
                headerP.textContent  = translations.index.headerP[lang] || translations.index.headerP.en;
            }
            const startButton = document.getElementById('start-button');
            const shownButton = document.getElementById('shown');
            const downloadButton = document.getElementById('download');
            const contactButton = document.getElementById('contact');
            const creditButton = document.getElementById('credit');
            const crowdfundingButton = document.getElementById('crowdfunding');
            if(startButton) {
                startButton.textContent = translations.index.startButton[lang] || translations.index.startButton.en;
            }
            if(shownButton) {
                shownButton.textContent = translations.index.shownButton[lang] || translations.index.shownButton.en;
            }
            if(downloadButton) {
                downloadButton.textContent = translations.index.downloadButton[lang] || translations.index.downloadButton.en;
            }
            if(contactButton) {
                contactButton.textContent = translations.index.contactButton[lang] || translations.index.contactButton.en;
            }
            if(creditButton) {
                creditButton.textContent = translations.index.creditButton[lang] || translations.index.creditButton.en;
            }
            if(crowdfundingButton) {
                crowdfundingButton.textContent = translations.index.crowdfundingButton[lang] || translations.index.crowdfundingButton.en;
            }
        }
        
        // For the group members page
        if(document.getElementById('members')) {
            const headerH1 = document.querySelector('header h1');
            const headerP  = document.querySelector('header p');
            const returnHomeLink = document.querySelector('#return-home a');
            if(headerH1) {
                headerH1.textContent = translations.group_members.headerH1[lang] || translations.group_members.headerH1.en;
            }
            if(headerP) {
                headerP.textContent = translations.group_members.headerP[lang] || translations.group_members.headerP.en;
            }
            if(returnHomeLink) {
                returnHomeLink.textContent = translations.index.returnHome[lang] || translations.index.returnHome.en;
            }
            const membersListItems = document.querySelectorAll('#members li');
            if(membersListItems.length === translations.group_members.membersList.length) {
                membersListItems.forEach((elem, index) => {
                    elem.textContent = translations.group_members.membersList[index][lang] || translations.group_members.membersList[index].en;
                });
            }
        }
        
        // For the crowdfunding page
        if(document.getElementById('crowdfunding-info')) {
            const header = document.querySelector('header');
            if(header) {
                const headerH1 = header.querySelector("h1");
                const headerP  = header.querySelector("p");
                if(headerH1 && headerP) {
                    headerH1.textContent = translations.crowdfunding.headerH1[lang] || translations.crowdfunding.headerH1.en;
                    headerP.textContent  = translations.crowdfunding.headerP[lang] || translations.crowdfunding.headerP.en;
                }
            }
            const crowdfundingInfoP1 = document.querySelector('#crowdfunding-info p:nth-of-type(1)');
            const crowdfundingInfoP2 = document.querySelector('#crowdfunding-info p:nth-of-type(2)');
            if(crowdfundingInfoP1) {
                crowdfundingInfoP1.textContent = translations.crowdfunding.info1[lang] || translations.crowdfunding.info1.en;
            }
            if(crowdfundingInfoP2) {
                crowdfundingInfoP2.textContent = translations.crowdfunding.info2[lang] || translations.crowdfunding.info2.en;
            }
        }
        
        // For the return home button on all pages except index
        if(document.querySelector('body').id !== 'index-page') {
            const returnHomeLink = document.querySelector('#return-home a');
            if(returnHomeLink) {
                returnHomeLink.textContent = translations.index.returnHome[lang] || translations.index.returnHome.en;
            }
        }
    }
});