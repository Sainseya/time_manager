<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Working Times Calendar for User {{ workingTimeData.userId }}</h1>
    <FullCalendar :options="calendarOptions" />

    <!-- Modal pour créer ou modifier les événements -->
    <Modal :visible="showModal" @close="closeModal">
      <WorkingTime
        :workingTimeData="workingTimeData"
        :isCreating="isCreating"
        @close="closeModal"
      />
    </Modal>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import WorkingTime from './WorkingTime.vue';
import Modal from './Modal.vue';

export default {
  components: {
    FullCalendar,
    Modal,
    WorkingTime
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        initialView: 'timeGridWeek',
        weekends: true,
        events: [],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        selectable: true,
        selectMirror: true,
        select: this.handleSelect,
        eventClick: this.handleEventClick,
        editable: true
      },
      showModal: false,
      selectedEvent: null,
      isCreating: true,
      workingTimeData: {
        userId: 1,
        start: '',
        end: ''
      }
    };
  },
  mounted() {
    this.fetchWorkingTimes();
  },
  methods: {
    async fetchWorkingTimes() {
      try {
        const response = await fetch(`http://localhost:4000/api/workingtime/${this.workingTimeData.userId}?start=2000-01-01T00:00:00&end=3000-12-31T00:00:00`, {
          method: 'GET'
        });
        const data = await response.json();
        this.calendarOptions.events = data.data.map(event => ({
          title: `Working Time ${event.id}`,
          start: event.start,
          end: event.end
        }));
      } catch (error) {
        console.error('Error fetching working times:', error);
      }
    },
    handleSelect(info) {
      this.isCreating = true;
      this.workingTimeData = {
        userId: this.workingTimeData.userId, // Conserver l'ID utilisateur
        start: info.startStr, // Transmettre la date de début
        end: info.endStr // Transmettre la date de fin
      };
      this.showModal = true;
    },
    handleEventClick(info) {
      this.isCreating = false;
      this.workingTimeData = {
        userId: this.workingTimeData.userId,
        start: info.event.startStr,
        end: info.event.endStr
      };
      this.selectedEvent = info.event; // Sauvegarder l'événement sélectionné si nécessaire
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<style>
.fc {
  z-index: 1; /* Force le calendrier à rester en arrière-plan */
}
</style>
