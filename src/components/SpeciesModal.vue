<style scoped>

    .font-sm{
        font-size: .8rem;
    }
    .species-modal{
        border-radius: 1.5rem;;
        background: white;
        /* padding: 0 15rem; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .close-modal{
        position: relative;
        padding: .5rem;
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }
    .close-modal button{
        padding: 0.75rem 1rem;
        border-radius: .5rem;
        border: 0px solid transparent;
        cursor: pointer;
        transition: all .33s ease-in-out;
    }
    .close-modal button:hover{
        background: rgba(0,0,0,.33);
    }

    .image img{
        height: 10rem;
        height: 40rem;
        object-fit: contain;
    }

    .taxon{
        display: flex;
        justify-content: center;
        gap: .33rem;
        align-items: center;
    }
    
    .stats-grid{
        display: flex;
        justify-content: space-between;
        width:50%;
    }
    .stats-grid div{
        display: flex;
        flex-direction: column;
        border-radius: 2.5rem 3rem;
        overflow: hidden;
    }
    
    .stat-value{
        padding: 0.25rem 1rem;
        background: rgb(196, 222, 233, .5);
    }

    .stat-label{
        text-align: center;
        background: rgb(58, 240, 240, .25);
    }

    .description{
        max-width: 100ch;
        text-align: justify;
        margin: 1rem;
        color: #121;
    }

    @media only screen and (max-width: 600px) {
        .font-sm{
            font-size: .7rem;
        }
        .species-modal{
            
            /* background: skyblue; */
        }

        .image img{
            max-width: 90vw;
            max-height: 30vh;
        }
        .stats-grid{
            width: 90%;
        }
    }
</style>

<template>
    <div class="species-modal">
        <div class="close-modal">
            <button @click="$emit('close')">X</button>
        </div>
        <div class="image">
            <img :src="imageUrl()" alt="">
        </div>
        <div class="id">
            {{species.id}}
        </div>
        <div class="common-name">
            {{species.common_name}}
        </div>
        <div class="scientific-name">
            <i>{{ species.scientific_name }}</i>
        </div>
        <div class="taxon font-sm">
            <span v-for="field in taxon_fields" :key="field" :title='`${field}: ${species[field]}`'>
                {{ species[field] }}
            </span>
        </div>
        <div class="stats-grid font-sm">
            <div>
                <span class="stat-value">
                    {{ species.season }}
                </span>
                <span class="stat-label">
                    Season
                </span>
            </div>
            <div>
                <span class="stat-value">
                    {{ species.size }}
                </span>
                <span class="stat-label">
                    Size
                </span>
            </div>
            <div>
                <span class="stat-value">
                    {{ species.habitat }}
                </span>
                <span class="stat-label">
                    Habitat
                </span>
            </div>
            <div>
                <span class="stat-value">
                    {{ species.altitude }}
                </span>
                <span class="stat-label">
                    Altitude
                </span>
            </div>
        </div>
        <div class="description font-sm"
            v-html="species.description"
        />
        <div class="source font-sm">
            {{ species.source }}
        </div>
        <!-- <pre>
            {{ Object.keys(species).filter((k) => used_fields.indexOf(k) == -1) }}
        </pre> -->
        
    </div>
</template>

<script setup>
    import { VueElement } from 'vue';

    const props = defineProps({
        species: Object
    })

    const taxon_fields = ["family", "subfamily", "tribe", "genus","species"]
    const used_fields = [...taxon_fields, "id", "sequence", "user_id", "featured_photo_id", "scientific_name", "common_name", "order", "description", "created_at", "updated_at", "image", "season", "size", "habitat", "altitude"]

    const imageUrl = () => {
        const family = props.species.family
        console.log(unused_fields())
        return (props.species.image) ?  `assets/photos/${family}/${props.species.image.filename}` : "#"
    }

    const unused_fields = () => {
        const op = {}
        Object.keys(props.species)
            .filter((k) => used_fields.indexOf(k) == -1)
            .forEach((k) => {
                op[k] = props.species[k]
            })

        return op
    }

</script>