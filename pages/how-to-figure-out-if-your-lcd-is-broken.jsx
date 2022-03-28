/* eslint-disable react/no-unescaped-entities */
export default function Post() {
	return (
		<div className="container">
			<h2 className="mt-4">How to figure out if your LCD is broken?</h2>
			<p className="fw-light">
				There is no double that the LCD is one of the most expensive components
				on your mobile device. Replacing an LCD is very costly and sometimes you
				end up with an aftermarket LCD, which may have all sorts of issues. If
				you broke your screen but the LCD is still working, you can get the
				glass panel replaced without changing the LCD.
			</p>
			<h5 className="p-3">
				That is why you should know when you need to replace the whole LCD, and
				when you only need to replace the glass panel
			</h5>
			<p className="fw-light">
				<b>Here are the steps to diagnose your device on your own:</b>
			</p>
			<ol>
				<li>
					<b>open an app with a white background</b> <br />
					check for lines, black dots, or anything that shouldn't be there.
				</li>
				<li>
					<b>turn the brightness down to the lowest setting</b> <br />
					look for light dots and bad pixels
				</li>
				<li>
					<b>open a drawing app</b> <br />
					Draw a line along the 4 sides of the screen, see if the line breaks
				</li>
			</ol>
			<ul>
				<li>
					If no other issue was found, the only thing broken is the glass, then
					you only need to replace the glass panel
				</li>
				<li>
					If there is an area that you can't draw on during step 3, you need to
					also replace the digitizer
				</li>
				<li>
					If you found any display issues during steps 1 and 2, you need to
					replace the whole LCD
				</li>
			</ul>
		</div>
	);
}
