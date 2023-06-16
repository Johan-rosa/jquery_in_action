$("<h1></h1>", {
    id: "main-title",
    style: "color: red;" 
}).appendTo("body");

$('#main-title').text("Hello")

$('<img>', {
    src: 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ',
    alt: 'Little Bear',
    style: "border-radius: 10px;",
    width: '300px',
    class: 'my-img',
    title:'I woof in your general direction',
    click: function() {alert($(this).attr('title'));}
})
.appendTo('body');