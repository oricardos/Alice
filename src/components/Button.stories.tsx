import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create account',
        size: 'md',
    },
    argTypes: {}
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        color: 'bg-secondary'
    }
}

export const Success: StoryObj<ButtonProps> = {
    args: {
        color: 'bg-success'
    }
}

export const Warning: StoryObj<ButtonProps> = {
    args: {
        color: 'bg-warning'
    }
}

export const Danger: StoryObj<ButtonProps> = {
    args: {
        color: 'bg-danger'
    }
}