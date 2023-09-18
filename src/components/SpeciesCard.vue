<style scoped>
    .species-card{
        border: 1px solid #999;
        box-shadow: 0.25rem 0.25rem 0.5rem #999;
        display: flex;
        flex-direction: column;
        border-radius: 1.5rem;
        padding-bottom: 0.25rem;
        overflow: hidden;
        transition: box-shadow var(--transition-speed), transform calc(var(--transition-speed) * 1.5);
        cursor: pointer;
    }

    .species-card:hover{
        box-shadow: 0.1rem 0.1rem 1rem #000;
        transform: scale(1.05);
        border-color: transparent;
    }

    img{
        height: 10rem;
        max-width: 15rem;
        min-width: 10rem;
        object-fit: contain;
    }

    .image{
        margin: 0 auto;
    }

    .common-name, .scientific-name{
        text-align:center;
        font-size: .8rem;
        max-width: 15rem;
    }

    
</style>

<template>
    <div class="species-card">
        <div class="image">
            <img :src="imageUrl()" alt="">
        </div>
        <div class="common-name">
            {{species.common_name}}
        </div>
        <div class="scientific-name">
            <i>{{ species.scientific_name }}</i>
        </div>
        
    </div>
</template>

<script setup>

    const props = defineProps({
        species: Object
    })

    const imageUrl = () => {
        const family = props.species.family
        let op = "#"
        if(props.species.image){
            // op = window.location.origin + `/assets/photos/all/${family}/${props.species.image.filename}`
            op = `../src/assets/photos/all/${family}/${props.species.image.filename}`
        }
        return op
    }

</script>