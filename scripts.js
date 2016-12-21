/**
 * Created by Michał_2 on 2016-12-20.
 */
var Dropdown = {

    // variables
    PAGE_WIDTH: "",
    BP: {
        desktop: 980,
        tablet: 740,
        mobile: 600
    },
    CLASS_ACTIVE: "active",
    DROPDOWN_ELEMENT: "dropdown-list",
    PARENT: "dropdown-parent",
    MOBILE_EVENT: "click",
    MOUSEOVER_EVENT: "mouseover",
    MOUSEOUT_EVENT: "mouseout",

    // init
    init: function () {
        Dropdown.initDesktop();
        Dropdown.initMobile();
    },
    initDesktop: function () {
        $("." + Dropdown.PARENT)
            .on(Dropdown.MOUSEOVER_EVENT, Dropdown.desktopHandlerIn)
            .on(Dropdown.MOUSEOUT_EVENT, Dropdown.desktopHandlerOut);
    },
    initMobile: function () {
        $("." + Dropdown.PARENT + " > a").on(Dropdown.MOBILE_EVENT, Dropdown.mobileHandler);
    },

    // function
    getWindowWidth: function () {
        return $(window).width();
    },
    isDesktop: function () {
        return Dropdown.PAGE_WIDTH > Dropdown.BP.desktop;
    },
    isMobile: function () {
        return Dropdown.PAGE_WIDTH < Dropdown.BP.desktop;
    },
    setPageWidth: function () {
        Dropdown.PAGE_WIDTH = Dropdown.getWindowWidth();
    },
    desktopHandlerIn: function () {
        Dropdown.setPageWidth();
        if (Dropdown.isDesktop()) {
            $(this).addClass(Dropdown.CLASS_ACTIVE);
        }
    },
    desktopHandlerOut: function () {
        Dropdown.setPageWidth();
        if (Dropdown.isDesktop()) {
            $(this).removeClass(Dropdown.CLASS_ACTIVE);
        }
    },
    mobileHandler: function () {
        Dropdown.setPageWidth();
        event.preventDefault();
        if (Dropdown.isMobile()) {
            $(this).parent().toggleClass(Dropdown.CLASS_ACTIVE).siblings().removeClass(Dropdown.CLASS_ACTIVE);
        }
    }
};

$(document).ready(function () {
    Dropdown.init();
});