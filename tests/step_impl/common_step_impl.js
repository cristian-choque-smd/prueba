step("Page contains <content>", async (content) => {
    assert.ok(await text(contains(content)).exists());
    await waitFor(1000);
});