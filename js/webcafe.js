var member_lists = $('.member li:nth-child(n+2)');
var menu_items = $('.menu-item');
var btn_menu = $('.btn-menu');
var submenu_lists = $('.sub-menu li');

member_lists.prepend('<span aria-hidden="true">:</span>');
btn_menu.attr('role', 'button');
submenu_lists.addClass('icon-dot-circled');

btn_menu.on('click', function(e){
  e.preventDefault();
  if($(this).parent().hasClass('menu-act')){
    $(this).parent().removeClass('menu-act');
  }
  else{
    menu_items.removeClass('menu-act');
    $(this).parent().addClass('menu-act');
  }
});