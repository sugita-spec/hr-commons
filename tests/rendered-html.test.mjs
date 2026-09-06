import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the HR Commons landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /採用担当者が、/);
  assert.match(html, /本音で話せる場所/);
  assert.match(html, /コミュニティに参加する/);
  assert.match(html, /HRコモンズ/);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/);
});

test("renders a distinct event detail page", async () => {
  const response = await render("/events/candidate-experience");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /母集団形成に頼らない、選考体験の改善/);
  assert.match(html, /このセッションについて/);
  assert.doesNotMatch(html, /property="og:image"/);
});
