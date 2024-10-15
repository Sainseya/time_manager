export default (await import('vue')).defineComponent({
    data() {
        return {
            workingTimeData: {},
            updateWorkingTimeData: {
                start: '',
                end: ''
            },
            isCreating: true,
        };
    },
    methods: {
        async createWorkingTime() {
            try {
                const response = await fetch(`http://localhost:4000/api/workingtime/${this.workingTimeData.userId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ working_time: {
                            start: this.workingTimeData.start,
                            end: this.workingTimeData.end
                        } }),
                });
                const data = await response.json();
                this.workingTimeData = data.data;
                this.updateWorkingTimeData = {
                    start: data.data.start,
                    end: data.data.end
                };
                this.isCreating = false;
                console.log('WorkingTime created:', data);
            }
            catch (error) {
                console.error('Error creating WorkingTime:', error);
            }
        },
        async updateWorkingTime() {
            // Logic for updating working time
            try {
                const response = await fetch(`http://localhost:4000/api/workingtime/${this.workingTimeData.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ working_times: this.updateWorkingTimeData }),
                });
                const data = await response.json();
                this.workingTimeData = {
                    start: this.updateWorkingTimeData.start,
                    end: this.updateWorkingTimeData.end
                };
                console.log('WorkingTime updated:', data);
            }
            catch (error) {
                console.error('Error updateing WorkingTime:', error);
            }
        },
        async deleteWorkingTime() {
            try {
                const response = await fetch(`http://localhost:4000/api/workingtime/${this.workingTimeData.id}`, {
                    method: 'DELETE',
                });
                const data = await response.json();
                this.workingTimeData = {};
                this.updateWorkingTimeData = {
                    start: '',
                    end: ''
                };
                this.isCreating = false;
                console.log('WorkingTime deleted:', data);
            }
            catch (error) {
                console.error('Error deleting WorkingTime:', error);
            }
        },
    },
});
;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    if (__VLS_ctx.isCreating) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.createWorkingTime) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ placeholder: ("User ID"), required: (true), });
        (__VLS_ctx.workingTimeData.userId);
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("datetime-local"), placeholder: ("Start Time"), required: (true), });
        (__VLS_ctx.workingTimeData.start);
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("datetime-local"), placeholder: ("End Time"), required: (true), });
        (__VLS_ctx.workingTimeData.end);
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), });
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.updateWorkingTime) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("datetime-local"), placeholder: ("Start Time"), required: (true), });
        (__VLS_ctx.updateWorkingTimeData.start);
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("datetime-local"), placeholder: ("End Time"), required: (true), });
        (__VLS_ctx.updateWorkingTimeData.end);
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.deleteWorkingTime) }, });
    }
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
let __VLS_self;
