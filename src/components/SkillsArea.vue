<script lang="ts">

import SkillCard from './SkillCard.vue';


export default {
    components: { SkillCard },
    data(){
        return{
            skills:[
                {'nome': 'PHP', 'logo': 'php-1.svg', 'link': 'https://www.php.net/'},
                {'nome': 'Python', 'logo': 'python-5.svg', 'link': 'https://www.python.org/'},
                {'nome': 'JavaScript', 'logo': 'logo-javascript.svg', 'link': '#'},
                {'nome': 'TypeScript', 'logo': 'typescript.svg', 'link': 'https://www.typescriptlang.org/'},
                {'nome': 'CSS', 'logo': 'css-3.svg', 'link': '#'},
                {'nome': 'HTML5', 'logo': 'html-1.svg', 'link': '#'},
                {'nome': 'Laravel', 'logo': 'laravel-2.svg', 'link': 'https://laravel.com/'},
                {'nome': 'CodeIgniter', 'logo': 'codeigniter.svg', 'link': 'https://codeigniter.com/'},
                // {'nome': 'Doctrine', 'logo': 'doctrine.svg', 'link': 'https://www.doctrine-project.org/'},
                {'nome': 'Vue JS', 'logo': 'vue-9.svg', 'link': 'https://vuejs.org/'},
                {'nome': 'SASS', 'logo': 'sass-1.svg', 'link': 'https://sass-lang.com/'},
                {'nome': 'Tailwind CSS', 'logo': 'tailwind-css-2.svg', 'link': 'https://tailwindcss.com/'},
                // {'nome': 'Bootstrap CSS', 'logo': 'bootstrap-4.svg', 'link': 'https://getbootstrap.com/'},
                // {'nome': 'AlpineJS', 'logo': 'alpine-13.svg', 'link': 'https://alpinejs.dev/'},
                // {'nome': 'JQuery', 'logo': 'jquery-4.svg', 'link': 'https://jquery.com/'},
                {'nome': 'MySql', 'logo': 'mysql-6.svg', 'link': 'https://www.mysql.com/'},
                {'nome': 'PostgreSql', 'logo': 'postgresql.svg', 'link': 'https://www.postgresql.org/'},
                // {'nome': 'GIT', 'logo': 'git-icon.svg', 'link': 'https://git-scm.com/'},
                // {'nome': 'C', 'logo': 'c.svg', 'link': '#'},
                // {'nome': 'C++', 'logo': 'c-1.svg', 'link': '#'},
                // {'nome': 'Samba', 'logo': 'samba.svg', 'link': 'https://www.samba.org/'},

            ]
        }
    }
}
</script>

<template>

<div id="habilidade" class="container mx-auto flex-col justify-center p-4 bg-black text-white">
        <div class="flex justify-center">
            <span class="font-nexal sm:text-4xl text-3xl p-4">
                &lt; &gt; Habilidades &lt; &gt;
            </span>
        </div>
        <div class="flex justify-center p-4">
            <div class="flex flex-wrap justify-center p-4 max-w-5xl items-center">
                <!-- Card -->
                <SkillCard v-for="sk in skills" :key="sk.nome" :skill='{ "nome": sk.nome,"logo":sk.logo, "link":sk.link }' />

            </div>
        </div>
    </div>
</template>
