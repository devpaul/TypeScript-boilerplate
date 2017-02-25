/**
 * Define your development middleware layer here
 * @see https://github.com/devpaul/webserv
 */

import Forwarder from 'webserv/middleware/Forwarder';
import ServeDirectory from 'webserv/middleware/ServeDirectory';
import ServeFile from 'webserv/middleware/ServeFile';
import { HandlerFunction, Handler } from 'webserv/handlers/Handler';
import { log } from 'webserv/log';
import route from 'webserv/handlers/route';

// ---------------------------------------------------------------------------------------------------------------------
// CONFIGURATION
// ---------------------------------------------------------------------------------------------------------------------
log.level = 'info';
// ---------------------------------------------------------------------------------------------------------------------

export function createMiddleware(): Array<Handler | HandlerFunction> {
	return [
		// Redirect / to the base directory of the app
		route(/^\/$/).wrap(new Forwarder('/_build/app/')),
		new ServeFile('.'),
		new ServeDirectory('.')
	];
}
