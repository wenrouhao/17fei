
import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function Footer(props: JSX.HTMLAttributes<HTMLButtonElement>) {
	return (
		<>
			<div class="text-center mt-8 p-2">
				<a class="bg-orange-700 border rounded py-2 px-4 font-red" href="/about">关于</a>
			</div>
			<div class="text-center mt-8 text-pink-100  text-sm">@温柔浩</div>
		</>
	);
}
