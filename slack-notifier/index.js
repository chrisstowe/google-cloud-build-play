const IncomingWebhook = require('@slack/client').IncomingWebhook;
const SLACK_WEBHOOK_URL = "[SLACK_WEBHOOK]"

const webhook = new IncomingWebhook(SLACK_WEBHOOK_URL);

// subscribe is the main function called by Cloud Functions.
module.exports.subscribe = (event, callback) => {
    const build = eventToBuild(event.data);

    if (build.status === 'QUEUED') {
        return webhook.send(`QUEUED:\n
            Repo: ${build.projectId.source.repoSource.repoName}\n
            Branch: ${build.projectId.source.repoSource.branchName}`,
            callback);
    }

    if (build.status === 'WORKING') {
        return webhook.send('WORKING...', callback);
    }

    if (build.status === 'SUCCESS') {
        webhook.send('🎉🎉🎉 SUCCESS 🎉🎉🎉', callback);
    }

    const message = createSlackMessage(build);
    webhook.send(message, callback);
};

// Transform pubsub event message to a build object.
const eventToBuild = (data) =>
    JSON.parse(new Buffer(data, 'base64').toString());

// Create a message from a build object.
const createSlackMessage = (build) => ({
    text: `Build \`${build.id}\``,
    mrkdwn: true,
    attachments: [{
        title: 'Build logs',
        title_link: build.logUrl,
        fields: [{
            title: 'Status',
            value: build.status,
        }]
    }],
});
