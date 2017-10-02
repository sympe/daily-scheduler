$(document).ready(function() {

    create_event = function(event){
      $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
        var token
        if (!options.crossDomain) {
          token = $('meta[name="csrf-token"]').attr('content')
          if (token) {
            return jqXHR.setRequestHeader('X-CSRF-Token', token)
          }
        }
      })
      $.ajax({
        type: "post",
        url: "/events/create",
        data: {
          title: event.title,
          start: event.start,
          end: event.end
        }
      }).done(function(data){
        alert("登録しました!")
      }).fail(function(data){
        alert("登録できませんでした。")
      })
    }

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
        editable: true,
        navLinks: true,
        selectable: true,
        selectHelper: true,
        select: function (start, end, jsEvent, view) {
                    var event = new Object()
                    event.title = prompt('タイトル')
                    event.start = moment(start).format()
                    event.allDay = false
                    $('#calendar').fullCalendar('renderEvent', event)
                    create_event(event)
                },
        editable: true
    })
    $('.fc-toolbar').remove()
})
