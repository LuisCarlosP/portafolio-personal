export const personalInfo = {
    name: 'Luis Carlos Picado Rojas',
    role: 'Software Architect',
    email: 'picadoluiscarlos@gmail.com',
    phone: '+506 8723 3132',
    location: 'San José, Costa Rica',
    github: 'https://github.com/LuisCarlosP',
    linkedin: 'https://www.linkedin.com/in/luiscarlosp/'
};

export const projects = [
    {
        id: 'trashia',
        name: 'TrashIA',
        description: 'projects.trashia.description',
        details: 'projects.trashia.details',
        technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'TensorFlow', 'Redis'],
        demoUrl: 'https://luiscarlosp.github.io/TrashIAFrontend/',
        codeUrl: 'https://github.com/LuisCarlosP/TrashIA',
        featured: true,
        category: 'fullstack'
    },
    {
        id: 'chess3d',
        name: 'Chess 3D',
        description: 'projects.chess3d.description',
        details: 'projects.chess3d.details',
        technologies: ['React', 'Three.js', 'chess.js'],
        demoUrl: 'https://luiscarlosp.github.io/chess-3d/',
        codeUrl: 'https://github.com/LuisCarlosP/chess-3d',
        featured: false,
        category: 'frontend'
    },
    {
        id: 'frontend3',
        name: 'Frontend Proyecto 3',
        description: 'projects.frontend3.description',
        details: 'projects.frontend3.details',
        technologies: ['Angular', 'TypeScript', 'Bootstrap', 'HTML5', 'CSS3'],
        demoUrl: 'https://www.youtube.com/watch?v=whnM4r6fZGU',
        codeUrl: 'https://github.com/LuisCarlosP/FrontEndProyecto3',
        featured: false,
        category: 'frontend'
    },
    {
        id: 'crud3',
        name: 'CRUD Proyecto 3',
        description: 'projects.crud3.description',
        details: 'projects.crud3.details',
        technologies: ['Java', 'Spring Boot', 'JWT', 'CORS', 'Gradle'],
        demoUrl: 'https://www.youtube.com/watch?v=whnM4r6fZGU',
        codeUrl: 'https://github.com/LuisCarlosP/CRUDProyecto3',
        featured: false,
        category: 'backend'
    },
    {
        id: 'graphql',
        name: 'Simple GraphQL API',
        description: 'projects.graphql.description',
        details: 'projects.graphql.details',
        technologies: ['Java', 'Spring Boot', 'GraphQL', 'Maven'],
        demoUrl: 'https://github.com/LuisCarlosP/SimpleGraphQL',
        codeUrl: 'https://github.com/LuisCarlosP/SimpleGraphQL',
        featured: false,
        category: 'backend'
    }
];

export const skillCategories = [
    {
        id: 'frontend',
        title: 'skills.frontend',
        skills: [
            { name: 'React', level: 80 },
            { name: 'Angular', level: 75 },
            { name: 'JavaScript', level: 85 },
            { name: 'TypeScript', level: 75 },
            { name: 'HTML5', level: 90 },
            { name: 'CSS3', level: 85 }
        ]
    },
    {
        id: 'backend',
        title: 'skills.backend',
        skills: [
            { name: 'Java', level: 90 },
            { name: 'Python', level: 90 },
            { name: 'C#', level: 70 },
            { name: 'Node.js', level: 70 },
            { name: 'ASP.NET', level: 65 },
            { name: 'GraphQL', level: 60 }
        ]
    },
    {
        id: 'databases',
        title: 'skills.databases',
        skills: [
            { name: 'MySQL', level: 80 },
            { name: 'Microsoft SQL', level: 75 },
            { name: 'MariaDB', level: 75 },
            { name: 'MongoDB', level: 70 },
            { name: 'Git', level: 85 },
            { name: 'Docker', level: 65 }
        ]
    }
];
