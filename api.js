const fetch = require('node-fetch');

const WebhookService = require('./services/webhook-service');
const TranslationService = require('./services/translation-service');
const { onshapeApiUrl } = require('./config');
const { forwardRequestToOnshape } = require('./utils');
const redisClient = require('./redis-client');
    
const apiRouter = require('express').Router();

/**
 * Get the Elements of the current document/workspace.
 * 
 * GET /api/elements
 *      -> 200, [ ...elements ]
 *      -or-
 *      -> 500, { error: '...' }
 */
apiRouter.get('/elements', (req, res) => {
    forwardRequestToOnshape(`${onshapeApiUrl}/documents/d/${req.query.documentId}/w/${req.query.workspaceId}/elements`, req, res);
});


apiRouter.get('/users/sessioninfo', (req, res) => {
    console.log(req.query.documentId)
    forwardRequestToOnshape(`${onshapeApiUrl}/users/sessioninfo`, req, res);
});


// This works!!
apiRouter.get('/getFStudio', (req, res) => {
    forwardRequestToOnshape(`${onshapeApiUrl}/documents/d/${req.query.documentId}/w/${req.query.workspaceId}/elements?elementType=FEATURESTUDIO&withThumbnails=false`, req, res);
});


/**
 * Get the Parts of the current document/workspace.
 * 
 * GET /api/parts
 *      -> 200, [ ...parts ]
 *      -or-
 *      -> 500, { error: '...' }
 */

apiRouter.get('/fsContents', (req, res) => {
    forwardRequestToOnshape(`${onshapeApiUrl}/featurestudios/d/${req.query.documentId}/w/${req.query.workspaceId}/e/${req.query.blockly}`, req, res);
});

/**
 * Get the Specs of 
 * 
 * GET /api/updateFStudio
 *      -> 200
 *      -or-
 *      -> 500, { error: '...' }
 */

apiRouter.post('/updateFStudio', (req, res) => {
    forwardRequestToOnshape(`${onshapeApiUrl}/featurestudios/d/${req.query.documentId}/w/${req.query.workspaceId}/e/${req.query.blockly}`, req, res);
});




/**
 * Get the Parts of the given Element in the current document/workspace.
 * 
 * GET /api/elements/:eid/parts
 *      -> 200, [ ...parts ]
 *      -or-
 *      -> 500, { error: '...' }
 */
apiRouter.get('/elements/:eid/parts', (req, res) => {
    forwardRequestToOnshape(`${onshapeApiUrl}/parts/d/${req.query.documentId}/w/${req.query.workspaceId}/e/${req.params.eid}`, req, res);
});


/**
 * Get the Parts of the current document/workspace.
 * 
 * GET /api/parts
 *      -> 200, [ ...parts ]
 *      -or-
 *      -> 500, { error: '...' }
 */
apiRouter.get('/parts', (req, res) => {
    forwardRequestToOnshape(`${onshapeApiUrl}/parts/d/${req.query.documentId}/w/${req.query.workspaceId}`, req, res);
});

/**
 * Receive a webhook event.
 * 
 * POST /api/event
 *      -> 200
 */
apiRouter.post('/event', (req, res) => {
    if (req.body.event === 'onshape.model.translation.complete') {
        // Save in Redis so we can return to client later (& unregister the webhook).
        redisClient.set(req.body.translationId, req.body.webhookId);
    }
    res.status(200).send();
});

module.exports = apiRouter;
