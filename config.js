var options = {
	handlers : [ 
		{ 
			url: "/assets",
			static_dir: "assets",
			upload_dir: "uploads",
			mime_type: "image/*" 
		},
		{
			url: "/css",
			static_dir: "css",
			mime_type: "text/css" 
		},
		{
			url: "/lib",
			static_dir: "lib",
			mime_type: "application/javascript"
		},
		{
			url: "/src",
			static_dir: "src",
			mime_type: "application/javascript"
		},
		{
			url: "/",
			static_dir: "SuperAwsomeJsEngine",
			mime_type: "text/html"
		},
	],
	default_handler : { 
		default_html: "index.html",
		default_upload: "upload"
	},
	port: 8080
}

//dont delete yhis line
exports.options = options;