const projects = [
    {
        id: 'desktopDump',
        title: 'Desktop Dump Archive',
        year: '2020 - ongoing',
        description: 'Website, multimedia files, archive is updated regularly',
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
        description: 'Videos, YouTube playlist, additional video added yearly',
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
    }
];

function generateProjects() {
    const projectsContainer = document.getElementById('projects');
    const sidebar = document.querySelector('.sidebar');

    projects.forEach(project => {
        // Create sidebar icon
        const icon = document.createElement('img');
        icon.src = project.image;
        icon.id = `${project.id}ICON`;
        icon.addEventListener('click', () => scrollToElement(project.id));
        sidebar.appendChild(icon);

        // Create project section
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        projectDiv.id = project.id;

        const projectContent = `
            <div class="project-content">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-text">
                    <h1>${project.title}</h1>
                    <p>${project.year}<br/>
                    ${project.description}<br/>
                    ${project.links.map(link => `<a href="${link.url}">${link.text}</a><br/>`).join('')}
                    </p>
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

window.addEventListener('load', () => {
    adjustBodyMargin();
    generateProjects();
});

window.addEventListener('resize', adjustBodyMargin);

function adjustBodyMargin() {
    const headerHeight = document.querySelector('header').offsetHeight;
    document.body.style.paddingTop = headerHeight + 'px';
}