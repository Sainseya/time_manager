import { ref } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { defineComponent } from 'vue';
export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
    // Enregistre les composants Chart.js utilisés
    ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
    // Variables réactives
    const userId = ref('');
    const chartData = ref({
        labels: [],
        datasets: [
            {
                label: 'Working Time (Hours)',
                backgroundColor: '#f87979',
                data: []
            }
        ]
    });
    const chartOptions = ref({
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Hours Worked'
                }
            }
        }
    });
    // Fonction pour récupérer les données
    const fetchData = async () => {
        if (!userId.value) {
            alert('Please enter a User ID');
            return;
        }
        try {
            const response = await fetch(`http://localhost:4000/api/workingtime/${userId.value}?start=2000-01-01T00:00:00&end=3000-12-31T00:00:00`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            // Formatage des données pour le graphique
            chartData.value.labels = data.data.map(item => new Date(item.start).toLocaleDateString());
            chartData.value.datasets[0].data = data.data.map(item => {
                const duration = new Date(item.end).getTime() - new Date(item.start).getTime();
                return Math.round(duration / (1000 * 60 * 60)); // Conversion en heures
            });
            console.log('Data fetched:', data);
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const __VLS_fnComponent = (await import('vue')).defineComponent({});
    ;
    let __VLS_functionalComponentProps;
    function __VLS_template() {
        const __VLS_ctx = {};
        const __VLS_localComponents = {
            ...{
                BarChart: Bar
            },
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
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ placeholder: ("Enter User ID"), });
        (__VLS_ctx.userId);
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.fetchData) }, });
        if (__VLS_ctx.chartData.labels.length) {
            const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.BarChart;
            /** @type { [typeof __VLS_components.BarChart, ] } */
            // @ts-ignore
            const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ data: ((__VLS_ctx.chartData)), options: ((__VLS_ctx.chartOptions)), }));
            const __VLS_2 = __VLS_1({ data: ((__VLS_ctx.chartData)), options: ((__VLS_ctx.chartOptions)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
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
    const __VLS_self = (await import('vue')).defineComponent({
        setup() {
            return {
                userId: userId,
                chartData: chartData,
                chartOptions: chartOptions,
                fetchData: fetchData,
            };
        },
        name: 'ChartManager',
        components: {
            BarChart: Bar
        }
    });
    return defineComponent({
        setup() {
            return {};
        },
        name: 'ChartManager',
        components: {
            BarChart: Bar
        }
    });
})();
;
