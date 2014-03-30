var pageSession = new ReactiveDict;

var images = [];
for(var i = 1; i < 43; i++){
	images.push({
		src: '/img/product/promo-' + i + '.jpg'
		, index: i
	});
}

Template.Home.helpers({
	images: function(){
		return images;
	}
});

Template.ProductImage.events({
	'click .product': function(){
		Session.set('selectedProduct', this);
	}
});

Template.ProductImageZoom.helpers({
	selectedProduct: function () {
		return Session.get('selectedProduct');
	}
});

Template.ProductImageZoom.events({
	'click': function (e, tmpl) {
		Session.set('selectedProduct', false);
	}
});