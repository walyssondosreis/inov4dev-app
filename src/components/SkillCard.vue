<script lang="ts">

import type ISkill from '../interfaces/ISkill';
import type { PropType } from 'vue';


export default {
    props: {
        skill: { type: Object as PropType<ISkill>, required: true }
    }
}

</script>


<template>
    <div class="flex-col p-4 max-w-md">

        <div class="flex justify-center w-16 hover:scale-125 duration-300 hover:stroke-white">

            <a v-if="skill.link!='#'" :href="skill.link" target="_blank" rel="noopener noreferrer">
                <img :src="'/images/logo/' + skill.logo" :alt="'Imagem logo ' + skill.nome" :title="skill.nome">
            </a>
            <img v-else :src="'/images/logo/' + skill.logo" :alt="'Imagem logo ' + skill.nome" :title="skill.nome">

        </div>

    </div>
</template>

