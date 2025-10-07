'use client'
import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'

export function ArcTimeline (props) {
  const targetRef = useRef(null)
  const {
    className,
    children,
    data,
    arcConfig = {},
    defaultActiveStep = {},
    ...restProps
  } = props

  const {
    circleWidth = 5000,
    angleBetweenMinorSteps = 0.35,
    lineCountFillBetweenSteps = 10,
    boundaryPlaceholderLinesCount = 50
  } = arcConfig

  const {
    time: defaultActiveTime = data[0].time,
    stepIndex: defaultActiveStepIndex = 0
  } = defaultActiveStep || {}

  // Flatten all steps for easy navigation
  const allSteps = data.flatMap((line, lineIndex) =>
    line.steps.map((step, stepIndex) => ({
      ...step,
      lineIndex,
      stepIndex,
      time: line.time
    }))
  )

  // Calculate initial flat index
  function getInitialIndex () {
    let count = 0
    for (const timelineItem of data) {
      if (timelineItem.time === defaultActiveTime) {
        count += defaultActiveStepIndex
        break
      } else {
        count += timelineItem.steps.length
      }
    }
    return count
  }

  const [currentIndex, setCurrentIndex] = useState(() => getInitialIndex())
  const [circleContainerRotateDeg, setCircleContainerRotateDeg] = useState(
    () =>
      -1 *
        getInitialIndex() *
        angleBetweenMinorSteps *
        (lineCountFillBetweenSteps + 1) -
      angleBetweenMinorSteps * boundaryPlaceholderLinesCount
  )

  // Debouncing for scroll
  const isScrollingRef = useRef(false)

  useEffect(() => {
    setCircleContainerRotateDeg(
      -1 *
        currentIndex *
        angleBetweenMinorSteps *
        (lineCountFillBetweenSteps + 1) -
        angleBetweenMinorSteps * boundaryPlaceholderLinesCount
    )
  }, [
    currentIndex,
    angleBetweenMinorSteps,
    lineCountFillBetweenSteps,
    boundaryPlaceholderLinesCount
  ])

  function handleWheel (e) {
    if (isScrollingRef.current) return

    const isAtStart = currentIndex === 0 && e.deltaY < 0
    const isAtEnd = currentIndex === allSteps.length - 1 && e.deltaY > 0

    if (isAtStart && !isAtEnd) {
      e.preventDefault()
      e.stopPropagation()
    }

    if (isAtStart || isAtEnd) {
      return
    }

    isScrollingRef.current = true
    setTimeout(() => (isScrollingRef.current = false), 350)

    setCurrentIndex(idx => {
      if (e.deltaY > 0 && idx < allSteps.length - 1) {
        return idx + 1
      } else if (e.deltaY < 0 && idx > 0) {
        return idx - 1
      }
      return idx
    })
  }

  return (
    <motion.div
      ref={targetRef}
      {...restProps}
      className={cn('relative h-[380px] w-full overflow-hidden', className)}
      onWheel={handleWheel}
      tabIndex={0} // ensures div is focusable for wheel input
      style={{ outline: 'none' }}
    >
      <div
        style={{
          transform: `translateX(-50%) rotate(${circleContainerRotateDeg}deg)`,
          width: `${circleWidth}px`
        }}
        className='absolute left-1/2 top-28 aspect-square origin-center rounded-full transition-all duration-500 ease-in-out'
      >
        {data.map((line, lineIndex) => (
          <div key={`${lineIndex}`}>
            {line.steps.map((step, stepIndex) => {
              // calc the angle of the step
              const stepFlatIndex =
                data
                  .slice(0, lineIndex)
                  .map(item => item.steps.length)
                  .reduce((prev, current) => prev + current, 0) + stepIndex

              const angle =
                angleBetweenMinorSteps *
                  (lineCountFillBetweenSteps + 1) *
                  stepFlatIndex +
                angleBetweenMinorSteps * boundaryPlaceholderLinesCount

              const isLastStep =
                lineIndex === data.length - 1 &&
                stepIndex === line.steps.length - 1
              const isFirstStep = lineIndex === 0 && stepIndex === 0

              // check if the step is active (by index)
              const isActive = stepFlatIndex === currentIndex
              return (
                <div key={`${lineIndex}-${stepIndex}`}>
          
                  {isFirstStep && (
                    <PlaceholderLines
                      isFirstStep={true}
                      isLastStep={false}
                      angle={angle}
                      angleBetweenMinorSteps={angleBetweenMinorSteps}
                      lineCountFillBetweenSteps={lineCountFillBetweenSteps}
                      boundaryPlaceholderLinesCount={
                        boundaryPlaceholderLinesCount
                      }
                      lineIndex={lineIndex}
                      stepIndex={stepIndex}
                      circleWidth={circleWidth}
                      circleContainerRotateDeg={circleContainerRotateDeg}
                    />
                  )}
                  <div
                    className={cn(
                      'absolute left-1/2 top-0 -translate-x-1/2 cursor-pointer transition-all duration-200',
                      isActive ? 'h-[120px] w-[2px]' : 'h-16 w-[1.5px]'
                    )}
                    style={{
                      transformOrigin: `50% ${circleWidth / 2}px`,
                      transform: `rotate(${angle}deg)`
                    }}
                    onClick={() => setCurrentIndex(stepFlatIndex)}
                  >
                    <div
                      className={cn(
                        'h-full w-full transition-colors duration-200',
                        isActive
                          ? 'bg-[var(--step-line-active-color,#888888)] dark:bg-[var(--step-line-active-color,#9780ff)]'
                          : 'bg-[var(--step-line-inactive-color,#b1b1b1)] dark:bg-[var(--step-line-inactive-color,#737373)]'
                      )}
                      style={{
                        transformOrigin: 'center top',
                        transform: `rotate(${
                          -1 * angle - circleContainerRotateDeg
                        }deg)`
                      }}
                    >
                      <div
                        className={cn(
                          'absolute bottom-0 left-1/2 aspect-square -translate-x-1/2',
                          isActive
                            ? 'translate-y-[calc(100%_+_14px)] scale-[1.2] text-[var(--icon-active-color,#555555)] dark:text-[var(--icon-active-color,#d4d4d4)]'
                            : 'translate-y-[calc(100%_+_4px)] scale-100 text-[var(--icon-inactive-color,#a3a3a3)] dark:text-[var(--icon-inactive-color,#a3a3a3)]'
                        )}
                      >
                        {step.icon}
                      </div>
                      <p
                        className={cn(
                          'absolute bottom-0 left-1/2 line-clamp-3 flex w-[240px] -translate-x-1/2 translate-y-[calc(100%_+_42px)] items-center justify-center text-center text-sm transition-opacity duration-300 ease-in',
                          'text-[var(--description-color,#555555)] dark:text-[var(--description-color,#d4d4d4)]',
                          isActive ? 'opacity-100' : 'opacity-0'
                        )}
                      >
                        {step.content}
                      </p>
                    </div>
                    {stepIndex === 0 && (
                      <div
                        className={cn(
                          'absolute left-1/2 top-0 z-10 -translate-x-1/2 translate-y-[calc(-100%-24px)] whitespace-nowrap',
                          isActive
                            ? 'text-[var(--time-active-color,#555555)] dark:text-[var(--time-active-color,#d4d4d4)]'
                            : 'text-[var(--time-inactive-color,#a3a3a3)] dark:text-[var(--time-inactive-color,#a3a3a3)]'
                        )}
                      >
                        {line.time}
                      </div>
                    )}
                  </div>
                  <PlaceholderLines
                    isFirstStep={false}
                    isLastStep={isLastStep}
                    angle={angle}
                    angleBetweenMinorSteps={angleBetweenMinorSteps}
                    lineCountFillBetweenSteps={lineCountFillBetweenSteps}
                    boundaryPlaceholderLinesCount={
                      boundaryPlaceholderLinesCount
                    }
                    lineIndex={lineIndex}
                    stepIndex={stepIndex}
                    circleWidth={circleWidth}
                    circleContainerRotateDeg={circleContainerRotateDeg}
                  />
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function PlaceholderLines (props) {
  const {
    isFirstStep,
    isLastStep,
    angle,
    angleBetweenMinorSteps,
    lineCountFillBetweenSteps,
    boundaryPlaceholderLinesCount,
    lineIndex,
    stepIndex,
    circleWidth,
    circleContainerRotateDeg
  } = props

  const getAngle = index => {
    if (isFirstStep) {
      return index * angleBetweenMinorSteps
    } else {
      return angle + (index + 1) * angleBetweenMinorSteps
    }
  }

  return (
    <>
      {Array(
        isLastStep || isFirstStep
          ? boundaryPlaceholderLinesCount
          : lineCountFillBetweenSteps
      )
        .fill('')
        .map((_, fillIndex) => {
          const fillAngle = getAngle(fillIndex)
          return (
            <div
              key={`${lineIndex}-${stepIndex}-${fillIndex}`}
              className='absolute left-1/2 top-0 h-[34px] w-[1px] -translate-x-1/2'
              style={{
                transformOrigin: `50% ${circleWidth / 2}px`,
                transform: `rotate(${fillAngle}deg)`
              }}
            >
              <div
                className='h-full w-full bg-[var(--placeholder-line-color,#a1a1a1)] dark:bg-[var(--placeholder-line-color,#737373)]'
                style={{
                  transformOrigin: 'center top',
                  transform: `rotate(${
                    -1 * fillAngle - circleContainerRotateDeg
                  }deg)`
                }}
              ></div>
            </div>
          )
        })}
    </>
  )
}
