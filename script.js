document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            id: 'desktopDump',
            title: 'Desktop Dump Archive',
            year: '2020 - ongoing',
            description: 'Website, multimedia files, archive is updated regularly<br/>Unique',
            links: [
                { text: 'Archive', url: 'https://mollysoda.hotglue.me/?Desktop%20Dump%20Archive.head' },
                { text: 'Screen Walk', url: 'https://thephotographersgallery.org.uk/whats-on/watch-screen-walk-molly-soda' }
            ],
            image: 'photos/Screenshot 2025-01-03 at 4.44.28 PM.png'
        },
        {
            id: 'steadierFooting',
            title: 'Steadier Footing',
            year: '2013 - ongoing',
            description: 'Videos, YouTube playlist, additional video added yearly<br/>Unique (Individual videos edition of 3, 1 AP)<br/>2019 video “I want to be alone” in permanent collection of FRAC Méca',
            links: [
                { text: 'Playlist', url: 'https://www.youtube.com/watch?v=FlCy6RI7iYw&list=PLC1Ry_tD1kTXSR_FdUz6XqIx_C4eog4jR&index=1&t=0s&ab_channel=mollysoda' }
            ],
            image: 'photos/Screenshot 2025-01-03 at 4.50.10 PM.png'
        },
        {
            id: 'trivialPursuit',
            title: 'Trivial Pursuit',
            year: '2024',
            description: 'Play starring Maya Man, Mackenzie Thomas, and Maya Martinez',
            links: [
                { text: 'Script', url: 'https://docs.google.com/document/d/1xmZhFNEDQ4GU3auF51mCs1CiAALhigde4KcpmU_yaHY/edit?usp=sharing' },
                { text: 'Documentation', url: 'https://www.youtube.com/watch?v=hHvjW7Na534' },
                { text: 'Postcards', url: 'https://mollysoda.metalabel.com/trivialpursuitcards?variantId=1' }
            ],
            image: 'photos/Screenshot 2025-01-03 at 4.57.52 PM.png'
        },
        {
            id: 'mollystuff',
            title: 'mollysstuff',
            year: '2024',
            description: '.zip folders, multimedia files, binders, inkjet, laser and transparency prints',
            links: [
                { text: 'Purchase', url: 'https://mollysoda.metalabel.com/mollysstuff?variantId=1' },
                { text: 'Release Documentation', url: 'https://www.thecobrasnake.com/molly-soda-publication-launch' },
                { text: 'Blog Post', url: 'https://mollysoda.substack.com/p/save-for-later' }
            ],
            image: 'photos/Screenshot 2025-01-03 at 5.02.03 PM.png'
        },
        {
            id: 'whatsInMyBag',
            title: "what's in my bag",
            year: '2024',
            description: 'Video, 12 min 34 sec',
            links: [
                { text: 'Video', url: 'https://youtu.be/P_jTDwnYs6E?si=npFWWJyO7tqxOVjV' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/whats-in-my-bag' }
            ],
            image: 'photos/Screenshot 2025-01-03 at 5.10.08 PM.png'
        },
        {
            id: 'haircuts',
            title: 'Haircuts Folder',
            year: '2003 - ongoing',
            description: 'Website, images taken and downloaded as a teenager (2003-07)',
            links: [
                { text: 'Website', url: 'https://haircutsfolder.tumblr.com/' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/the-girl-in-the-haircuts-folder' }
            ],
            image: 'photos/Screenshot 2025-01-03 at 5.16.25 PM.png'
        },
        {
            id: 'tomatoGirl',
            title: 'Tomato Girl',
            year: '2023',
            description: 'Video, 1 min 56 sec, Documentation of TikTok live stream, Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=dRQVLNafI18' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/you-say-tomato-i-say-tomato-girl' }
            ],
            image: 'photos/Screenshot 2025-01-03 at 5.33.07 PM.png'
        },
        {
            id: 'cupid',
            title: 'cupid',
            year: '2023',
            description: 'Two-channel video, 2 min 52 sec<br/>Webcam video printed out, doctored frame by frame, rescanned<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=bvxhF5Qj4uQ' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/notes-on-cupid' }
            ],
            image: 'photos/Screenshot 2025-01-03 at 5.38.21 PM.png'
        },
        {
            id: 'chickMagnet',
            title: 'Chick Magnet',
            year: '2022 - 2023',
            description: 'Inkjet prints, custom magnets <br/>Vision board on refrigerator<br/>Dimensions variable<br/>Unique',
            links: [
                { text: 'Book', url: 'https://shop.heavymannerslibrary.com/products/molly-soda-chick-magnet-book' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/chick-magnet' },
                { text: 'Press', url: 'https://i-d.co/article/molly-soda-interview-chick-magnet-photography' }
            ],
            image: 'photos/d06e7ae8-7f35-409b-b85b-b8a639cfe15b_1650x2550.jpg'
        },
        {
            id: 'makingAnIcedCoffee',
            title: 'Making an Iced Coffee',
            year: '2023',
            description: 'Video, 2 min 54 sec, TikTok Video, 2 min 54 sec, series of laser prints<br/>Dimensions variable<br/>Unique',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=0hpjwc0eeNQ&ab_channel=mollysoda' },
                { text: 'TikTok', url: 'https://www.tiktok.com/@mollysodaofficial/video/7230866484283641130' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 10.44.12 AM.png'
        },
        {
            id: 'girlsMirrorPicAestheticFlash',
            title: 'girls mirror pic aesthetic flash',
            year: '2023',
            description: 'Prototype, transparent laser prints, mirror<br/>Collection of girls taking selfies with flash printed onto mirrored acrylic<br/>Dimensions variable',
            links: [
                { text: 'Documentation', url: 'https://www.instagram.com/p/CqYAgvTuqwu/?img_index=2' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 10.53.36 AM.png'
        },
        {
            id: 'tumblr',
            title: 'Molly Soda Tumblr',
            year: '2009 - ongoing',
            description: 'Website, blog, multimedia files<br/>Unique',
            links: [
                { text: 'Website', url: 'https://mollysoda.tumblr.com/' },
                { text: 'Rhizome', url: 'https://artbase.rhizome.org/wiki/Q15426' },
                { text: 'Rhizome Presents: Some Tumblrs! (New Museum)', url: 'https://www.youtube.com/watch?v=2Y2Gy2zHbQE' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 1.00.19 PM.png',
        },
        {
            id: 'roomMakeover1',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover2',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover3',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover4',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover5',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover6',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover7',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover8',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover9',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover10',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover11',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover12',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover13',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover14',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover15',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover16',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover17',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover18',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover19',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover20',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover21',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover22',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover23',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover24',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover25',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover26',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover27',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover28',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover29',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover30',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover31',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        },
        {
            id: 'roomMakeover32',
            title: 'ROOM MAKEOVER! *messy girl aesthetic inspired* girl clutter ♡',
            year: '2023',
            description: 'Video, 15 min 00 sec<br/>Edition of 3, 1AP',
            links: [
                { text: 'Video', url: 'https://www.youtube.com/watch?v=LpwvjpKrQJA&t=5s&ab_channel=mollysoda' },
                { text: 'Blog post', url: 'https://mollysoda.substack.com/p/girl-clutter' },
                { text: 'Press', url: 'https://www.nytimes.com/2023/03/08/style/clutter-messy-room-tiktok-instagram.html' }
            ],
            image: 'photos/Screenshot 2025-01-04 at 11.01.39 AM.png',
        }
    ];

    function generateProjects() {
        const colors = ['#ff2f9a', '#ce652e', '#cd6565', '#ffff04', '#b418d2', '#61c82b', '#0000fe', '#17174e', '#003201', '#174f7e', '#eab400', '#ffafaf', '#6b1746', '#ff00ff', '#016429', '#960100', '#98302e', '#0ebeb3', '#f92929', '#683133', '#ffff98', '#ffccff', '#ff6698', '#65ccfe', '#320100', '#99cc99', '#000034', '#ff9a66', '#b6c870', '#c0e0b3', '#d4a0d7', '#c3e7fe', '#e6d11c', '#e7d4bb', '#3485b7', '#d23ab8', '#ed3476', '#a75b2f', '#bf9ec5', '#575877', '#f55404', '#f08fc5', '#fce700', '#a092bd', '#5c4931', '#468263', '#5439f6', '#badefa', '#359ee1', '#b6926d', '#552d1c', '#ef5a40'];
        const projectsContainer = document.getElementById('projects');
        const sidebar = document.querySelector('.sidebar');
        let i = 0;

        projects.forEach(project => {
            // Create sidebar icon
            const icon = document.createElement('div');
            //icon.style.width = '20px'; // Set width for the icon
            //icon.style.height = '20px'; // Set height for the icon
            icon.style.position = 'relative'; // Set position to relative for layering
            icon.id = `${project.id}ICON`;
            icon.setAttribute('title', project.title); // Add tooltip with project title
            icon.addEventListener('click', () => scrollToElement(project.id));
            icon.addEventListener('mouseover', () => {
                icon.style.backgroundColor = 'transparent'; // Change to transparent on hover
            });
            icon.addEventListener('mouseout', () => {
                icon.style.backgroundColor = project.color; // Use saved color
            });

            const img = document.createElement('img');
            img.src = project.image;
            img.style.width = '100%'; // Set width for the img div
            img.style.height = '100%'; // Set height for the img div
            img.style.objectFit = 'cover'; // Ensure the image covers the entire div
            img.style.position = 'absolute'; // Position image absolutely within the icon
            img.style.top = '0'; // Align image to the top
            img.style.left = '0'; // Align image to the left
            img.style.zIndex = '-1'; // Set z-index for the image
            icon.style.backgroundColor = colors[i]; // Set solid color for the icon
            project.color = colors[i]; // Use saved color
            i = (i + 1) % colors.length; // Cycle through colors
            icon.style.zIndex = '1'; // Set z-index for the icon background
            sidebar.appendChild(icon);
            icon.appendChild(img);

            const maxSidebarHeight = window.innerHeight;
            const iconCount = projects.length;
            const iconSize = maxSidebarHeight / iconCount; // Calculate icon size
            icon.style.setProperty('height', `${iconSize}px`);
            icon.style.setProperty('width', `${iconSize}px`);

            // Create project section
            const projectDiv = document.createElement('div');
            projectDiv.className = 'project';
            projectDiv.id = project.id;

            const projectContent = `
    <div class="project-content">
        <h1>${project.title}</h1>
        <p>${project.year}</p>
            <img src="${project.image}" alt="${project.title}" onclick="this.nextElementSibling.style.display = 'block'">
            <img src="${project.image}" alt="${project.title}" style="display: none;" class='enlarged' onclick="this.style.display = this.style.display === 'none' ? 'block' : 'none'">
        <div class="project-text">
            <p>${project.description}</p>
            ${project.links.map(link => `<a href="${link.url}">${link.text}</a><br/>`).join('')}
        </div>
    </div>
`;
            projectDiv.innerHTML = projectContent;
            projectsContainer.appendChild(projectDiv);
        });
    }

    function scrollToElement(elementId) {
        const element = document.getElementById(elementId);
        const headerHeight = document.querySelector('header').offsetHeight;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - headerHeight, behavior: 'smooth' });
    }

    function adjustBodyMargin() {
        const headerHeight = document.querySelector('header').offsetHeight;
        document.body.style.paddingTop = headerHeight + 'px';
    }

    window.addEventListener('resize', adjustBodyMargin);

    // Initialize the page
    adjustBodyMargin();
    generateProjects();
});