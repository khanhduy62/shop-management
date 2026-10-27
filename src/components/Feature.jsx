import {
	storyblokEditable,
	StoryblokServerRichText,
} from '@storyblok/react/rsc';

const Feature = ({ blok }) => {
	return (
		<div className="feature" {...storyblokEditable(blok)}>
			{typeof blok.name === 'string' ? (
				<span>{blok.name}</span>
			) : (
				<StoryblokServerRichText document={blok.name} />
			)}
		</div>
	);
};

export default Feature;
