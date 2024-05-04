import axios from "axios";

test("Fetching axios", async () => {
    const { status } = await axios.get('https://rickandmortyapi.com/api');
    expect(status == 200).toBeTruthy();
});