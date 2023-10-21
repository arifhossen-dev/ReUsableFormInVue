<template>
  <div>
    <h1>Create an event</h1>
    <form>
      <BaseSelect
        :options="categories"
        v-model="event.category"
        label="Select a category"
      />

      <h3>Name & describe your event</h3>´

      <BaseInput
        v-model="event.title"
        label="Title"
        type="text"
      />

      <BaseInput
        v-model="event.description"
        label="Description"
        type="text"
      />

      <h3>Where is your event?</h3>

      <BaseInput
        v-model="event.location"
        label="Location"
        type="text"
      />


      <p>
        {{ event }}
      </p>

      <h3>Are pets allowed?</h3>
      <div>
        <BaseRadio
          v-model="event.pets"
          value="1"
          label="Yes"
          name="pets"
        />
      </div>

      <div>
        <BaseRadio
          v-model="event.pets"
          value="0"
          label="No"
          name="pets"
        />
      </div>

      <h3>Extras</h3>
      <div>
        <BaseCheckbox
          v-model="event.extras.catering"
          label="Catering"
        />
      </div>
      
      <div>
        <BaseCheckbox
          v-model="event.extras.music"
          label="Live Music"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import BaseCheckbox from '../components/BaseCheckbox.vue';
import BaseInput from '../components/BaseInput.vue';
import BaseRadio from '../components/BaseRadio.vue';
import BaseSelect from '../components/BaseSelect.vue';

export default {
    data() {
        return {
            categories: [
                'sustainability',
                'nature',
                'animal welfare',
                'housing',
                'education',
                'food',
                'community'
            ],
            event: {
                category: '',
                title: '',
                description: '',
                location: '',
                pets: 1,
                extras: {
                    catering: false,
                    music: false
                }
            }
        };
    },
    components: { BaseInput, BaseSelect, BaseCheckbox, BaseRadio }
}
</script>