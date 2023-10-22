<template>
  <input
      type="radio"
      v-bind="{ ...$attrs, onChange: updateValue }"
      :checked="modelValue === value"
      :id="uuid"
    />
  <label
    v-if="label"
    :for="uuid"
  >
    {{ label }}
  </label>
  <BaseErrorMessage
    v-if="error"
    :id="`${uuid}-error`"
  >
    {{ error }}
  </BaseErrorMessage>
</template>

<script>
import UniqueID from '../features/UniqueID'
import SetupFormComponent from '../features/SetupFormComponent'
import BaseErrorMessage from './BaseErrorMessage.vue'

export default {
    props: {
        label: {
            type: String,
            default: ''
        },
        modelValue: {
            type: [String, Number]
        },
        value: {
            type: [String, Number]
        },
        error: {
            type: String,
            default: ''
        }
    },
    setup(props, context) {
        const uuid = UniqueID().getID();
        const { updateValue } = SetupFormComponent(props, context);
        return {
            updateValue,
            uuid
        };
    },
    components: { BaseErrorMessage }
}
</script>