define("#switchable/0.9.3/carousel",["./switchable","jquery"],function(a,b,c){var d=a("./switchable"),e=a("jquery"),f="ui-switchable",g=f+"-prev-button",h=f+"-next-button",i=f+"-disabled-button";c.exports=d.extend({attrs:{circular:!0,prevButton:{getter:function(a){return e(a).eq(0)}},nextButton:{getter:function(a){return e(a).eq(0)}}},_parseRole:function(){d.prototype._parseRole.call(this);var a=this.dataset.role;if(!a)return;var b=this.get("prevButton"),c=this.get("nextButton");!b[0]&&a.prev&&(b=this.$(a.prev),this.set("prevButton",b)),!c[0]&&a.next&&(c=this.$(a.next),this.set("nextButton",c)),b.addClass(g),c.addClass(h)},_initTriggers:function(){d.prototype._initTriggers.call(this);var a=this,b=this.get("circular");this.get("prevButton").click(function(c){c.preventDefault(),(b||a.get("activeIndex")>0)&&a.prev()}),this.get("nextButton").click(function(c){c.preventDefault();var d=a.get("length")-1;(b||a.get("activeIndex")<d)&&a.next()}),b||this.on("switch",function(b){a._updateButtonStatus(b)})},_updateButtonStatus:function(a){var b=this.get("prevButton"),c=this.get("nextButton");b.removeClass(i),c.removeClass(i),a==0?b.addClass(i):a===this.get("length")-1&&c.addClass(i)}})});