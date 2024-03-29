/* PRACTICALSERIES (c) 2016

*******************************************************************************
Title :          LOCAL SCROLL - JQUERY                                SCROLL.JS
*******************************************************************************

PRACTICALSERIES: Practical Series of Publications by Michael Gledhill
                 Published in the United Kingdom

                 Email: mg@practicalseries.com
                 Web:   https://practicalseries.com

-------------------------------------------------------------------------------
DETAILS         LOCAL SCROLL FUNCTIONS

jQuery is using the latest version from the GoogleAPIs library.

This script applies the scroll to a point within the page (scrollTop)
functionality for the current page.

-------------------------------------------------------------------------------
NAMING CONVENTIONS

Each <section> of the site has a waypoint (WP) reference number that identifies
the start of each section. These are id attributes and have the format:

        #js--ccssii

    where:  cc - chapter number
            ss - subsection number
            ii - inline section number

The six digit number is unique to each section, i.e. section 2.1.3
would have waypoint reference js--020103

The trigger class used in the <a> element to trigger the scroll to the waypoint
has the name .js-sc-000000 where the six digit number matches the waypoint
number of the section that is to be scrolled to.

The scrollTop function has an offset of -60px to ensure the title is visible
below the fixed navigation bar.

-------------------------------------------------------------------------------
MODIFICATION HISTORY:

This is a complete summary of all software modifications.

Date          Issue        Author         Reason for Modification
-------------------------------------------------------------------------------
03 Jun 2019   D03          M. Gledhill    Development - based on PS1002 R01

15 May 2018   D00          M. Gledhill    Created
---------------------------------------------------------------------------- */


/* ****************************************************************************
   WAIT FOR PAGE TO LOAD
   ****************************************************************************
   No jQuery actions take place until the webpage has loaded, all JQuery code
   is contained within the .ready(function()).
   ************************************************************************* */


$(document).ready(function() {                  /* START OF PAGE READY FUNCTION */

/* ****************************************************************************
   REVISION
   **************************************************************************** */

    $('#rev-scroll').append (
        "<p>D03</p>"                         /* LOCAL JS REVISION NUMBER */
    );



/* ****************************************************************************
   SCROLL TO SECTION
   ****************************************************************************
   This holds several scrollTop functions that scroll from the TOC to the
   specified section. There is one click function per <a> within the TOC.
   ************************************************************************* */


/* ---------------------------------------------------------------------------
   SCROLL TO TOP
   The offset is set to .to -80 - e.g.

    $('.js--sc-000000').click(function () {
       $('html, body').animate({scrollTop: $('#js--000000').offset().top -80}, 1000);
    });
   ------------------------------------------------------------------------- */
   $('.js--sc-000000').click(function () {
       $('html, body').animate({scrollTop: $('#js--000000').offset().top -80}, 1000);
    });


/* ---------------------------------------------------------------------------
   SCROLL TO CHAPTER (Non heading level after TOC)
   The offset is set to .to -10 - e.g.

    $('.js--sc-NN0000').click(function () {
       $('html, body').animate({scrollTop: $('#js--NN0000').offset().top -10}, 1000);
    });
   ------------------------------------------------------------------------- */
    $('.js--sc-000001').click(function () {
       $('html, body').animate({scrollTop: $('#js--000001').offset().top -20}, 1000);
    });

    $('.js--sc-010000').click(function () {
       $('html, body').animate({scrollTop: $('#js--010000').offset().top -20}, 1000);
    });

    $('.js--sc-020000').click(function () {
       $('html, body').animate({scrollTop: $('#js--020000').offset().top -20}, 1000);
    });

    $('.js--sc-030000').click(function () {
       $('html, body').animate({scrollTop: $('#js--030000').offset().top -20}, 1000);
    });

    $('.js--sc-040000').click(function () {
       $('html, body').animate({scrollTop: $('#js--040000').offset().top -20}, 1000);
    });

    $('.js--sc-050000').click(function () {
       $('html, body').animate({scrollTop: $('#js--050000').offset().top -20}, 1000);
    });

    $('.js--sc-060000').click(function () {
       $('html, body').animate({scrollTop: $('#js--060000').offset().top -20}, 1000);
    });

    $('.js--sc-070000').click(function () {
       $('html, body').animate({scrollTop: $('#js--070000').offset().top -20}, 1000);
    });

    $('.js--sc-080000').click(function () {
       $('html, body').animate({scrollTop: $('#js--080000').offset().top -20}, 1000);
    });

    $('.js--sc-090000').click(function () {
       $('html, body').animate({scrollTop: $('#js--090000').offset().top -20}, 1000);
    });

    $('.js--sc-100000').click(function () {
       $('html, body').animate({scrollTop: $('#js--100000').offset().top -20}, 1000);
    });

    $('.js--sc-110000').click(function () {
       $('html, body').animate({scrollTop: $('#js--110000').offset().top -20}, 1000);
    });


/* ---------------------------------------------------------------------------
   SCROLL TO -  SECTIONS & SUBSECTIONS
   The offset is set to .to -20 - e.g.

    $('.js--sc-NN0100').click(function () {
       $('html, body').animate({scrollTop: $('#js--NN0100').offset().top -20}, 1000);
    });
   ------------------------------------------------------------------------- */
    $('.js--sc-030100').click(function () {
       $('html, body').animate({scrollTop: $('#js--030100').offset().top -20}, 1000);
    });

    $('.js--sc-030200').click(function () {
       $('html, body').animate({scrollTop: $('#js--030200').offset().top -20}, 1000);
    });

    $('.js--sc-030300').click(function () {
       $('html, body').animate({scrollTop: $('#js--030300').offset().top -20}, 1000);
    });

    $('.js--sc-030400').click(function () {
       $('html, body').animate({scrollTop: $('#js--030400').offset().top -20}, 1000);
    });

    $('.js--sc-030401').click(function () {
       $('html, body').animate({scrollTop: $('#js--030401').offset().top -20}, 1000);
    });

    $('.js--sc-030402').click(function () {
       $('html, body').animate({scrollTop: $('#js--030402').offset().top -20}, 1000);
    });

    $('.js--sc-030500').click(function () {
       $('html, body').animate({scrollTop: $('#js--030500').offset().top -20}, 1000);
    });

    $('.js--sc-030501').click(function () {
       $('html, body').animate({scrollTop: $('#js--030501').offset().top -20}, 1000);
    });

    $('.js--sc-030600').click(function () {
       $('html, body').animate({scrollTop: $('#js--030600').offset().top -20}, 1000);
    });

    $('.js--sc-100100').click(function () {
       $('html, body').animate({scrollTop: $('#js--100100').offset().top -20}, 1000);
    });

    $('.js--sc-100200').click(function () {
       $('html, body').animate({scrollTop: $('#js--100200').offset().top -20}, 1000);
    });



/* ---------------------------------------------------------------------------
   SCROLL TO -  NON-STANDARD (INLINE) SECTIONS
   The offset is set to .to -120 - e.g.

          $('.js--sc-nn0101a').click(function () {
           $('html, body').animate({scrollTop: $('#js--nn0101a').offset().top -120}, 1000);
          });
   ------------------------------------------------------------------------- */

/* ---------------------------------------------------------------------------
   SCROLL TO -  CROSS REFERENCES
   For figures, the offset is set to .to -80 - e.g.

    $('.js--sc-fNN-01').click(function () {
       $('html, body').animate({scrollTop: $('#js--fNN-01').offset().top -80}, 1000);
    });

   For tables, the offset is set to .to -60 - e.g.

    $('.js--sc-tNN-01').click(function () {
       $('html, body').animate({scrollTop: $('#js--tNN-01').offset().top -60}, 1000);
    });

   For codefragments, the offset is set to .to -120 - e.g.

    $('.js--sc-cNN-01').click(function () {
       $('html, body').animate({scrollTop: $('#js--cNN-01').offset().top -120}, 1000);
    });

   For equations, the offset is set to .to -80 - e.g.

    $('.js--sc-eNN-01').click(function () {
       $('html, body').animate({scrollTop: $('#js--eNN-01').offset().top -80}, 1000);
    });

   For footnotes, the offset is set to .to -60 - e.g.

    $('.js--sc-fnNN').click(function () {
       $('html, body').animate({scrollTop: $('#js--fnNN').offset().top -80}, 1000);
    });
   ------------------------------------------------------------------------- */
    $('.js--sc-f03-01').click(function () {
       $('html, body').animate({scrollTop: $('#js--f03-01').offset().top -80}, 1000);
    });

    $('.js--sc-f03-02').click(function () {
       $('html, body').animate({scrollTop: $('#js--f03-02').offset().top -80}, 1000);
    });

    $('.js--sc-f03-03').click(function () {
       $('html, body').animate({scrollTop: $('#js--f03-03').offset().top -80}, 1000);
    });

    $('.js--sc-f03-04').click(function () {
       $('html, body').animate({scrollTop: $('#js--f03-04').offset().top -80}, 1000);
    });

    $('.js--sc-f03-05').click(function () {
       $('html, body').animate({scrollTop: $('#js--f03-05').offset().top -80}, 1000);
    });

    $('.js--sc-t03-01').click(function () {
       $('html, body').animate({scrollTop: $('#js--t03-01').offset().top -60}, 1000);
    });






});                                             /* END OF PAGE READY FUNCTION */
