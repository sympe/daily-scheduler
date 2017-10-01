$(document).ready(function() {
    $('#calendar').fullCalendar({
        locale: 'jp',
        header: {
            left:   '',
            center: '',
            right:  ''
        },
        viewRender: function(view, element) {
            element.find('.fc-head').html('')
            element.find('.fc-toolbar').html('')
        },
        defaultView: 'agendaDay',
        allDaySlot: false,
        slotLabelFormat: 'H:mm',
        timeFormat: {
            agenda: 'H:mm'
        },
        minTime: '8:00:00',
        maxTime: '21:00:00',
        aditable: true,
    })
    $('.fc-toolbar').remove()
})
