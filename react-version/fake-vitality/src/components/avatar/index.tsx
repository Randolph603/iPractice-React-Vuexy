import { forwardRef, ReactNode } from 'react'
import { Badge } from 'reactstrap'
import classnames from 'classnames'

interface Props {
  initials?: boolean;
  imgClassName?: string;
  className?: string;
  src?: string;
  tag?: Function | string;
  badgeUp?: boolean;
  content?: string;
  icon?: ReactNode;
  contentStyles?: object;
  badgeText?: string;
  img?: any;
  imgHeight?: string | number;
  imgWidth?: string | number;
  size?: 'sm' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'away' | 'busy';
  color?:
  'primary' |
  'secondary' |
  'success' |
  'danger' |
  'info' |
  'warning' |
  'dark' |
  'light-primary' |
  'light-secondary' |
  'light-success' |
  'light-danger' |
  'light-info' |
  'light-warning' |
  'light-dark';
  badgeColor?:
  'primary' |
  'secondary' |
  'success' |
  'danger' |
  'info' |
  'warning' |
  'dark' |
  'light-primary' |
  'light-secondary' |
  'light-success' |
  'light-danger' |
  'light-info' |
  'light-warning' |
  'light-dark';
  children?: ReactNode;
  rest?: [Props];
}

const Avatar = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    color,
    className,
    imgClassName,
    initials,
    size,
    badgeUp,
    content,
    icon,
    badgeColor,
    badgeText,
    img,
    imgHeight,
    imgWidth,
    status,
    tag: Tag,
    contentStyles,
    ...rest
  } = props

  // ** Function to extract initials from content
  const getInitials = str => {
    const results: any[] = []
    const wordArray = str.split(' ')
    wordArray.forEach((e: any) => {
      results.push(e[0])
    })
    return results.join('')
  }

  return (
    <div
      className={classnames('avatar', {
        [className ?? '']: className,
        [`bg-${color}`]: color,
        [`avatar-${size}`]: size
      })}
      ref={ref}
      {...rest}
    >
      {img === false || img === undefined ? (
        <span
          className={classnames('avatar-content', {
            'position-relative': badgeUp
          })}
          style={contentStyles}
        >
          {initials ? getInitials(content) : content}

          {icon ? icon : null}
          {badgeUp ? (
            <Badge color={badgeColor ? badgeColor : 'primary'} className='badge-sm badge-up' pill>
              {badgeText ? badgeText : '0'}
            </Badge>
          ) : null}
        </span>
      ) : (
        <img
          className={classnames({
            [imgClassName ?? '']: imgClassName
          })}
          src={img}
          alt='avatarImg'
          height={imgHeight && !size ? imgHeight : 32}
          width={imgWidth && !size ? imgWidth : 32}
        />
      )}
      {status ? (
        <span
          className={classnames({
            [`avatar-status-${status}`]: status,
            [`avatar-status-${size}`]: size
          })}
        ></span>
      ) : null}
    </div>
  )
})

export default Avatar;