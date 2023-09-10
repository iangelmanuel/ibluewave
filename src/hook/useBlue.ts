import { useContext } from 'react'
import { BlueWaveContext } from '@/context/BlueProvider'
export function useBlue () { return useContext(BlueWaveContext) }
