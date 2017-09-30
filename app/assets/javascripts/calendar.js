$(document).ready(function() {
    $('#calendar').fullCalendar({
        locale: 'jp',
        header: {
            left:   '',
            center: '',
            right:  ''
        },
        viewRender: function(view, element) {
            element.find('.fc-head').html('');
        },
        defaultView: 'agendaDay',
        allDaySlot: false,
        slotLabelFormat: 'H:mm',
        timeFormat: {
            agenda: 'H:mm'
        },
        height: 690,
        minTime: '8:00:00',
        maxTime: '21:00:00'
    })
})