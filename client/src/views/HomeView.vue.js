import User from '../components/User.vue';
import WorkingTime from '../components/WorkingTime.vue';
import WorkingTimes from '../components/WorkingTimes.vue';
import ClockManager from '../components/ClockManager.vue';
import ChartManager from '../components/ChartManager.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
    // @ts-ignore
    [User,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(User, new User({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    // @ts-ignore
    [WorkingTime,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(WorkingTime, new WorkingTime({}));
    const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
    // @ts-ignore
    [WorkingTimes,];
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(WorkingTimes, new WorkingTimes({}));
    const __VLS_11 = __VLS_10({}, ...__VLS_functionalComponentArgsRest(__VLS_10));
    // @ts-ignore
    [ClockManager,];
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(ClockManager, new ClockManager({}));
    const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
    // @ts-ignore
    [ChartManager,];
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(ChartManager, new ChartManager({}));
    const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
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
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            User: User,
            WorkingTime: WorkingTime,
            WorkingTimes: WorkingTimes,
            ClockManager: ClockManager,
            ChartManager: ChartManager,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
