import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { Text, View } from '@tarojs/components'
import { AtTimelineProps } from './types/timeline'

export default class AtTimeline extends React.Component {
	render() {
		const { pending, items, customStyle } = this.props;
		const rootClassName = ['oitm-timeline'];
		if (pending)
			rootClassName.push('oitm-timeline--pending');
		const rootClassObject = {
			'oitm-timeline--pending': pending
		};

		const itemElems = items.map((item, index) => {
			const { title = '', color, icon, content = [] } = item;
			const iconClass = classNames({
				'at-icon': true,
				[`at-icon-${icon}`]: icon
			});
			const itemRootClassName = ['oitm-timeline-item'];
			if (color)
				itemRootClassName.push(`oitm-timeline-item--${color}`);
			const dotClass = [];
			if (icon) {
				dotClass.push('oitm-timeline-item__icon');
			}
			else {
				dotClass.push('oitm-timeline-item__dot');
			}

			return (
				<View
					className={classNames(itemRootClassName)}
					key={`oitm-timeline-item-${index}`}
				>
					<View className='oitm-timeline-item__tail'></View>
					<View className={classNames(dotClass)}>
						{icon && <Text className={iconClass}></Text>}
					</View>
					<View className='oitm-timeline-item__content'>
						<View className='oitm-timeline-item__content-item oitm-timeline-item__content--title'>{title}</View>
						{content.map((sub, subIndex) => (
							<View
								className='oitm-timeline-item__content-item oitm-timeline-item__content--sub'
								key={subIndex}
							>
								{sub}
							</View>
						))}
					</View>
				</View>
			)
		})
		return (
			<View
				className={classNames(
					rootClassName,
					rootClassObject,
					this.props.className
				)}
				style={customStyle}
			>
				{itemElems}
			</View>
		)
	}
}

AtTimeline.defaultProps = {
	pending: false,
	items: [],
	customStyle: {}
};
AtTimeline.propTypes = {
	pending: PropTypes.bool,
	items: PropTypes.arrayOf(PropTypes.object),
	customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};
