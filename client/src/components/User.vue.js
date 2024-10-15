export default (await import('vue')).defineComponent({
    name: 'UserVue',
    data() {
        return {
            newUser: {
                name: '',
                email: ''
            },
            updateUserId: '',
            updatedUser: {
                email: ''
            },
            getUserId: '',
            deleteUserId: '',
            user: null
        };
    },
    methods: {
        async createUser() {
            try {
                const response = await fetch('http://localhost:4000/api/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ user: this.newUser })
                });
                const data = await response.json();
                console.log('User created:', data);
            }
            catch (error) {
                console.error('Error creating user:', error);
            }
        },
        async updateUser() {
            try {
                const response = await fetch(`http://localhost:4000/api/users/${this.updateUserId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ user: this.updatedUser })
                });
                const data = await response.json();
                console.log('User updated:', data);
            }
            catch (error) {
                console.error('Error updating user:', error);
            }
        },
        async getUser() {
            try {
                const response = await fetch(`http://localhost:4000/api/users/${this.getUserId}`);
                const data = await response.json();
                console.log('Get user:', data);
                this.user = data.data;
            }
            catch (error) {
                console.error('Error getting user:', error);
            }
        },
        async getAllUsers() {
            try {
                const response = await fetch(`http://localhost:4000/api/users`);
                const data = await response.json();
                console.log('Get user:', data);
            }
            catch (error) {
                console.error('Error getting user:', error);
            }
        },
        async deleteUser() {
            try {
                const response = await fetch(`http://localhost:4000/api/users/${this.deleteUserId}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                console.log('User deleted:', data);
            }
            catch (error) {
                console.error('Error deleting user:', error);
            }
        }
    }
});
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.getAllUsers) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.getUser) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ placeholder: ("User ID"), required: (true), });
    (__VLS_ctx.getUserId);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), });
    if (__VLS_ctx.user) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.user.username);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.user.email);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.createUser) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ placeholder: ("Username"), required: (true), });
    (__VLS_ctx.newUser.username);
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ placeholder: ("Email"), required: (true), });
    (__VLS_ctx.newUser.email);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.updateUser) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ placeholder: ("User ID"), required: (true), });
    (__VLS_ctx.updateUserId);
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ placeholder: ("New Email"), required: (true), });
    (__VLS_ctx.updatedUser.email);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.deleteUser) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ placeholder: ("User ID"), required: (true), });
    (__VLS_ctx.deleteUserId);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), });
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
