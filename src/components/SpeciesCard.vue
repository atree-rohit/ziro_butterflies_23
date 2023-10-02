<style scoped>
.species-card {
    border: 1px solid #999;
    box-shadow: 0.25rem 0.25rem 0.5rem #999;
    display: flex;
    flex-direction: column;
    border-radius: 1.5rem;
    padding-bottom: 0.25rem;
    overflow: hidden;
    transition: box-shadow var(--transition-speed), transform calc(var(--transition-speed) * 1.5);
    cursor: pointer;
    font-size: .8rem;
}

.species-card:hover {
    box-shadow: 0.1rem 0.1rem 1rem #000;
    transform: scale(1.05);
    border-color: transparent;
}

.species-card.last-clicked {
    animation: shiftShadow 1500ms forwards;
}

@keyframes shiftShadow {
    0% {
        box-shadow: 0 0 1rem rgb(37, 145, 10);
        /* Start with a yellow shadow */
    }

    75% {
        box-shadow: 0 0 1rem rgb(92, 18, 18);
        /* Shift the shadow horizontally to the right */
    }

    100% {
        box-shadow: 0 0 10px rgba(255, 0, 0, 0);
        /* Shift the shadow horizontally to the right */
    }
}


img {
    height: 10rem;
    min-width: 10rem;
    max-width: 15rem;
    object-fit: contain;
}

.image {
    margin: 0 auto;
}

.common-name,
.scientific-name {
    text-align: center;
    max-width: 15rem;
}

@media only screen and (max-width: 600px) {
    .species-card {
        border-radius: 0.75rem;
        font-size: .5rem;
    }

    img {
        height: 3.25rem;
        min-width: 5rem;
        max-width: 10rem;
    }

    .scientific-name {
        display: none;
    }
}
</style>

<template>
    <div class="species-card">
        <div class="image">
            <img :src="imageUrl()" alt="">
        </div>
        <div class="common-name">
            {{ species.common_name }}
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
    if (props.species.image) {
        // op = window.location.origin + `/assets/photos/all/${family}/${props.species.image.filename}`
        op = `/assets/photos/${family}/${props.species.image.filename}`
    }
    return op
}

</script>