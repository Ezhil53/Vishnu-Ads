"use client";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

export function ArcTimeline(props) {
  const {
    className,
    data,
    arcConfig = {},
    defaultActiveStep = {},
    ...restProps
  } = props;

  const {
    circleWidth = 5000,
    angleBetweenMinorSteps = 0.35,
    lineCountFillBetweenSteps = 10,
    boundaryPlaceholderLinesCount = 50,
  } = arcConfig;

  const {
    time: defaultActiveTime = data[0].time,
    stepIndex: defaultActiveStepIndex = 0,
  } = defaultActiveStep || {};

  // Flatten all steps into one list for easy navigation
  const flattenedSteps = data.flatMap((line, lineIndex) =>
    line.steps.map((step, stepIndex) => ({
      ...step,
      lineIndex,
      stepIndex,
      time: line.time,
    }))
  );

  const getStepAngle = (lineIndex, stepIndex) => {
    return (
      angleBetweenMinorSteps *
        (lineCountFillBetweenSteps + 1) *
        (data
          .slice(0, lineIndex)
          .map((item) => item.steps.length)
          .reduce((prev, current) => prev + current, 0) +
          stepIndex) +
      angleBetweenMinorSteps * boundaryPlaceholderLinesCount
    );
  };

  const [activeStep, setActiveStep] = useState(() => {
    let count = 0;
    for (const timelineItem of data) {
      if (timelineItem.time === defaultActiveTime) {
        count += defaultActiveStepIndex;
        break;
      } else {
        count += timelineItem.steps.length;
      }
    }
    return count;
  });

  const [circleContainerRotateDeg, setCircleContainerRotateDeg] = useState(() => {
    const initialStep = flattenedSteps[activeStep];
    const angle = getStepAngle(initialStep.lineIndex, initialStep.stepIndex);
    return -1 * angle;
  });

  const goToStep = (newStep) => {
    if (newStep < 0 || newStep >= flattenedSteps.length) return;
    setActiveStep(newStep);
    const { lineIndex, stepIndex } = flattenedSteps[newStep];
    const angle = getStepAngle(lineIndex, stepIndex);
    setCircleContainerRotateDeg(-1 * angle);
  };

  const handleNext = () => goToStep(activeStep + 1);
  const handlePrev = () => goToStep(activeStep - 1);

  // ⌨️ Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeStep]); 

  return (
    <div {...restProps} className={cn("relative h-[480px] w-full overflow-hidden", className)}>
      
      <div
        style={{
          transform: `translateX(-50%) rotate(${circleContainerRotateDeg}deg)`,
          width: `${circleWidth}px`,
        }}
        className="absolute left-1/2 top-28 aspect-square origin-center rounded-full transition-all duration-500 ease-in-out"
      >
        {data.map((line, lineIndex) => (
          <div key={lineIndex}>
            {line.steps.map((step, stepIndex) => {
              const angle = getStepAngle(lineIndex, stepIndex);
              const isActive = activeStep === flattenedSteps.findIndex(
                (s) => s.lineIndex === lineIndex && s.stepIndex === stepIndex
              );
              const isLastStep = lineIndex === data.length - 1 && stepIndex === line.steps.length - 1;
              const isFirstStep = lineIndex === 0 && stepIndex === 0;

              return (
                <div key={`${lineIndex}-${stepIndex}`}>
                  {isFirstStep && (
                    <PlaceholderLines
                      isFirstStep={true}
                      isLastStep={false}
                      angle={angle}
                      angleBetweenMinorSteps={angleBetweenMinorSteps}
                      lineCountFillBetweenSteps={lineCountFillBetweenSteps}
                      boundaryPlaceholderLinesCount={boundaryPlaceholderLinesCount}
                      lineIndex={lineIndex}
                      stepIndex={stepIndex}
                      circleWidth={circleWidth}
                      circleContainerRotateDeg={circleContainerRotateDeg}
                    />
                  )}

                  {/* Step Line */}
                  <div
                    className={cn(
                      "absolute left-1/2 top-0 -translate-x-1/2  cursor-pointer transition-all duration-200",
                      isActive ? "h-[120px] w-[2px]" : "h-16 w-[1.5px]"
                    )}
                    style={{
                      transformOrigin: `50% ${circleWidth / 2}px`,
                      transform: `rotate(${angle}deg)`,
                    }}
                    onClick={() => {
                      goToStep(flattenedSteps.findIndex(
                        (s) => s.lineIndex === lineIndex && s.stepIndex === stepIndex
                      ));
                    }}
                  >
                    <div
                      className={cn(
                        "h-full w-full transition-colors duration-200",
                        isActive
                          ? "bg-[var(--step-line-active-color,#888888)] dark:bg-[var(--step-line-active-color,#9780ff)]"
                          : "bg-[var(--step-line-inactive-color,#b1b1b1)] dark:bg-[var(--step-line-inactive-color,#737373)]"
                      )}
                      style={{
                        transformOrigin: "center top",
                        transform: `rotate(${ -1 * angle - circleContainerRotateDeg }deg)`,
                      }}
                    >
                      <div
                        className={cn(
                          "absolute bottom-0 left-1/2 aspect-square -translate-x-1/2",
                          isActive
                            ? "translate-y-[calc(100%_+_14px)] scale-[1.2] text-[var(--icon-active-color,#555555)] dark:text-[var(--icon-active-color,#d4d4d4)]"
                            : "translate-y-[calc(100%_+_4px)] scale-100 text-[var(--icon-inactive-color,#a3a3a3)] dark:text-[var(--icon-inactive-color,#a3a3a3)]"
                        )}
                      >
                        {step.icon}
                      </div>
                      <p
                        className={cn(
                          "absolute bottom-0 left-1/2 w-[240px] font-semibold -translate-x-1/2 translate-y-[calc(100%_+_42px)] text-center text-sm transition-opacity duration-300",
                          "text-[var(--description-color,#555555)] dark:text-[var(--description-color,#d4d4d4)]",
                          isActive ? "opacity-100" : "opacity-0"
                        )}
                      >
                        {step.content}
                      </p>
                    </div>

                    {stepIndex === 0 && (
                      <div
                        className={cn(
                          "absolute left-1/2 top-0 z-10 -translate-x-1/2 translate-y-[calc(-100%-24px)] whitespace-nowrap",
                          isActive
                            ? "text-[var(--time-active-color,#7008E7)] font-semibold dark:text-[var(--time-active-color,#d4d4d4)]"
                            : "text-[var(--time-inactive-color,#a3a3a3)] dark:text-[var(--time-inactive-color,#a3a3a3)]"
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
                    boundaryPlaceholderLinesCount={boundaryPlaceholderLinesCount}
                    lineIndex={lineIndex}
                    stepIndex={stepIndex}
                    circleWidth={circleWidth}
                    circleContainerRotateDeg={circleContainerRotateDeg}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-12">
        <button
          onClick={handlePrev}
          disabled={activeStep === 0}
          className="rounded-lg bg-gray-200 px-4 py-2 disabled:opacity-50 dark:bg-gray-700 cursor-pointer"
        >
          <LuArrowLeft/>
        </button>
        <button
          onClick={handleNext}
          disabled={activeStep === flattenedSteps.length - 1}
          className="rounded-lg bg-gray-200 px-4 py-2 disabled:opacity-50 dark:bg-gray-700 cursor-pointer"
        >
         <LuArrowRight/>
        </button>
      </div>
    </div>
  );
}

function PlaceholderLines({
  isFirstStep,
  isLastStep,
  angle,
  angleBetweenMinorSteps,
  lineCountFillBetweenSteps,
  boundaryPlaceholderLinesCount,
  lineIndex,
  stepIndex,
  circleWidth,
  circleContainerRotateDeg,
}) {
  const getAngle = (index) => {
    if (isFirstStep) {
      return index * angleBetweenMinorSteps;
    } else {
      return angle + (index + 1) * angleBetweenMinorSteps;
    }
  };

  return (
    <>
      {Array(isLastStep || isFirstStep ? boundaryPlaceholderLinesCount : lineCountFillBetweenSteps)
        .fill("")
        .map((_, fillIndex) => {
          const fillAngle = getAngle(fillIndex);
          return (
            <div
              key={`${lineIndex}-${stepIndex}-${fillIndex}`}
              className="absolute left-1/2 top-0 h-[34px] w-[1px] -translate-x-1/2"
              style={{
                transformOrigin: `50% ${circleWidth / 2}px`,
                transform: `rotate(${fillAngle}deg)`,
              }}
            >
              <div
                className="h-full w-full bg-[var(--placeholder-line-color,#a1a1a1)] dark:bg-[var(--placeholder-line-color,#737373)]"
                style={{
                  transformOrigin: "center top",
                  transform: `rotate(${ -1 * fillAngle - circleContainerRotateDeg }deg)`,
                }}
              ></div>
            </div>
          );
        })}
    </>
  );
}
