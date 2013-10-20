Package.describe({
	summary: "test"
});

Package.on_use(function(api) {
	api.use("accounts-password", "server");
	api.add_files('test.js', 'server');
});
Package.on_test(function(api) {
	api.use("test", "server");
});
