/**
 * 
 * @param {import("http").IncomingMessage} req 
 * @param {import("http").ServerResponse} res 
 */
export default function redirect(req, res) {
    const uri = new URL(req.url, `http://${req.headers.host}`)

    res.writeHead(307, {
        "Location": `https://github.com/dothq/gecko-dev-scripts/actions/runs/${uri.searchParams.get("run_id")}/jobs/${uri.searchParams.get("job_id")}`
    });

    res.end();
}