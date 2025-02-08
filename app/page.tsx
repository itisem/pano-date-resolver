import DateResolverCore from "./core";

export default function PanoDateResolver(){
	return <>
		<h1>pano date resolver</h1>
		<p className = "description">
			find out the exact time when a given pano with an accuracy of up to 2 seconds.{" "}
			<i>new: recent google updates mean that this tool also works with past coverage</i>
		</p>
		<p className = "description">
			<b>note: this tool currently doesn't support shortened (goo.gl) links, paste the full url!</b>
		</p>
		<p className = "description">
			if you want to read the technical details, see <a href = "https://silliest.website:3/blog/google-maps-dates/">my blogpost</a>,{" "}
			or check out the <a href = "https://github.com/itisem/pano-date-resolver">github page</a>
		</p>
		<DateResolverCore />
	</>
}

export const metadata = {
	title: "pano date resolver",
	description: "find when a specific google streetview panorama was taken"
};