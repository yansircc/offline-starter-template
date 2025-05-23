'use client'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useCounterStore } from '@/store/counter'
import { Minus, Plus, RefreshCcw } from 'lucide-react'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

/**
 * @description 这只是个示例页面，你可以随意修改这个页面或进行全面重构
 */
export default function StartTemplatePage() {
	const { count, increment, decrement, reset } = useCounterStore()
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		// 确保loading至少显示200毫秒
		const timer = setTimeout(() => {
			setIsLoading(false)
		}, 200)

		return () => clearTimeout(timer)
	}, [])

	const handleIncrement = () => {
		const success = increment()
		if (!success) {
			toast.error('已达到最大值 (10)')
		}
	}

	const handleDecrement = () => {
		const success = decrement()
		if (!success) {
			toast.error('已达到最小值 (0)')
		}
	}

	const handleReset = () => {
		reset()
		toast.success('计数器已重置为 0')
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
			
			<div className="space-y-8 text-center">
				<h1 className="font-medium text-2xl text-gray-900">

					初始化模板
				</h1>
				
				<div className="space-y-4">
					<div className="flex h-16 items-center justify-center font-bold text-4xl text-gray-900">
						{isLoading ? (
							<Skeleton className="h-8 w-8 bg-gray-200" />
						) : (
							count
						)}
					</div>
					
					<div className="flex justify-center gap-4">
						<Button 
							onClick={handleDecrement}
							variant="outline"
							disabled={count === 0 || isLoading}
						>
							<Minus className="h-4 w-4 text-gray-600" />
						</Button>
						
						<Button 
							onClick={handleReset}
							variant="outline"
							disabled={isLoading}
						>
							<RefreshCcw className="h-4 w-4 text-gray-600" />
						</Button>
						
						<Button 
							onClick={handleIncrement}
							variant="outline"
							disabled={count === 10 || isLoading}
						>
							<Plus className="h-4 w-4 text-gray-600" />
						</Button>
					</div>
					
					<div className="flex flex-col gap-2">
						<p className="text-gray-600 text-sm">
							玩玩看 👆 这只是个演示
						</p>
						<p className="text-gray-500 text-sm">
							范围: 0-10 | 自动保存到浏览器本地
						</p>
					</div>
				</div>
			</div>
		</main>
	)
}
