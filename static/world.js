
World = (function () {

	var p = console.log;
	
	if (typeof(World) != "undefined") {
		p("World already defined.");
		return World;
	}
		
	// ----- Global state ------------------------------------------------------------------- //

	var nil_world_private = clone_world(null, "nil world");
	var nil_world_public = nil_world_private.public_world;

	// ----- Helpers ------------------------------------------------------------------------ //

	// ----- Instance methods --------------------------------------------------------------- //

	// ----- NS methods --------------------------------------------------------------------- //

	function clone_world(source_world_private, name) {
		
		var new_world_public = {};
		var new_world_private = {};

		name = name || "Clone of " + source_world_private.name;
		
		// Private props
		new_world_private.name = name;
		new_world_private.public_world = new_world_public;
		new_world_private.source_world = source_world_private;
				
		// Public props
		new_world_public.name = name;
		new_world_public.source_world = source_world_private ? source_world_private.public_world : null;
		new_world_public.clone = function (name) {
			return clone_world(new_world_private, name).public_world;
		}
		
		return new_world_private;
	}

	// ----- Namespace ---------------------------------------------------------------------- //

	World = {};
	
	World.clone = function (name) {
		return clone_world(nil_world_private, name).public_world;
	}
	
	return World;
})()