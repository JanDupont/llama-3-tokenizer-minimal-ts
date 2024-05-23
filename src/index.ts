import { AutoTokenizer } from "@xenova/transformers";

const tokenizer = await AutoTokenizer.from_pretrained("Xenova/llama-3-tokenizer");

let text = "Cola schmeckt besser als in Dosen.";

let response = await tokenizer(text);
console.log("Tokens Count: ", response); // response.input_ids.size
