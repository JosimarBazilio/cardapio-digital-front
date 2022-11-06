import Bars from './Bars';

interface SectionBars {
    bars: BarsContent[],
}

interface BarsContent {
    name: string,
	cor: string,
}

function BarsSection({bars}: SectionBars) {
	return (
		<div>
			{
				bars.map((bars, index) => {
					return (
						<Bars key={index} name={bars.name} cor={bars.cor}/>
					);
				})
			}
		</div>
	);
}

export default BarsSection;
