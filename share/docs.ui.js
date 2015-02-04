// StyleDocco documentation user interface elements
// ==================================================================
// Dropdowns and search.

(function() {

  'use strict';
  /*global searchIndex:false*/

  // Helper functions. Using `Array.prototype` to make them work on NodeLists.
  var inArray = function(arr, item) {
    return Array.prototype.indexOf.call(arr, item) !== -1;
  };
  var filter = function(arr, iterator) {
    return Array.prototype.filter.call(arr, iterator);
  };
  var forEach = function(arr, iterator) {
    return Array.prototype.forEach.call(arr, iterator);
  };

  var bodyEl = document.getElementsByTagName('body')[0];

  (function() {
    var tocList = bodyEl.getElementsByClassName('bs-docs-sidenav')[0];
    if (!tocList) return;

    filter(bodyEl.getElementsByTagName('*'), function(el) {
      return inArray(['h1', 'h2', 'h3'], el.tagName.toLowerCase());
    }).map(function(h) {
      var el = document.createElement('li');
      var a = document.createElement('a');
      var lv = h.tagName.toLowerCase()[1];
      a.classList.add('lv' + lv);
      el.appendChild(a);
      a.href = '#' + h.id;
      a.innerHTML = h.innerHTML;
      tocList.appendChild(el);
    });

    tocList.removeChild(tocList.firstChild);

  })();

  (function() {
    var previewList = bodyEl.getElementsByClassName('preview-code');
    if (!previewList) return;

    forEach(previewList, function(el) {
      // el.firstChild.classList.add('highlight');
      el.classList.add('highlight');
    });

  })();

  (function() {
    var h1 = bodyEl.querySelectorAll('.bs-docs-section>h1');
    if (!h1) return;

    forEach(h1, function(el) {
      el.classList.add('page-header');
    });

  })();

})();


/*!
 * JavaScript for Bootstrap's docs (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see http://creativecommons.org/licenses/by/3.0/.
 */

!function ($) {
  'use strict';

  $(function () {

    // Scrollspy
    var $window = $(window)
    var $body   = $(document.body)

    $body.scrollspy({
      target: '.bs-docs-sidebar'
    })
    $window.on('load', function () {
      $body.scrollspy('refresh')
    })

    // Kill links
    $('.bs-docs-container [href=#]').click(function (e) {
      e.preventDefault()
    })

    // Sidenav affixing
    setTimeout(function () {
      var $sideBar = $('.bs-docs-sidebar')

      $sideBar.affix({
        offset: {
          top: function () {
            var offsetTop      = $sideBar.offset().top
            var sideBarMargin  = parseInt($sideBar.children(0).css('margin-top'), 10)
            var navOuterHeight = $('.bs-docs-nav').height()

            return (this.top = offsetTop - navOuterHeight - sideBarMargin)
          },
          bottom: function () {
            return (this.bottom = $('.bs-docs-footer').outerHeight(true))
          }
        }
      })
    }, 100)

    setTimeout(function () {
      $('.bs-top').affix()
    }, 100)

   

  })

}(jQuery);