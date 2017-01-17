# bncl-autolayout

REST API for bpmn auto layout

Previously forked from: https://github.com/bpmn-io/bpmn-moddle-auto-layout

# Requirements

* node.js

## Setup

1. Clone directory into local folder
2. Go into the cloned folder and enter `npm install`

## Run

1. Go into project folder
2. run `npm start`

## Usage

The API provides the POST request /autoLayout. Example Body:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" id="definitions_6796248b-2b45-460d-b427-ae22f63e261b" targetNamespace="http://camunda.org/examples" xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL">
  <bpmn:process id="pid-f27f870d-7504-40dd-856f-1f53c3fb9ab2">
    <bpmn:startEvent id="startevent1" name="message incoming">
      <bpmn:outgoing>startevent1-endevent1</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="startevent1-endevent1" sourceRef="startevent1" targetRef="endevent1"/>
    <bpmn:endEvent id="endevent1" name="terminated">
      <bpmn:incoming>startevent1-endevent1</bpmn:incoming>
    </bpmn:endEvent>
  </bpmn:process>
</bpmn:definitions>
```

output:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="definitions_6796248b-2b45-460d-b427-ae22f63e261b" targetNamespace="http://camunda.org/examples">
    <bpmn:process id="pid-f27f870d-7504-40dd-856f-1f53c3fb9ab2">
        <bpmn:startEvent id="startevent1" name="message incoming">
            <bpmn:outgoing>startevent1-endevent1</bpmn:outgoing>
        </bpmn:startEvent>
        <bpmn:sequenceFlow id="startevent1-endevent1" sourceRef="startevent1" targetRef="endevent1" />
        <bpmn:endEvent id="endevent1" name="terminated">
            <bpmn:incoming>startevent1-endevent1</bpmn:incoming>
        </bpmn:endEvent>
    </bpmn:process>
    <bpmndi:BPMNDiagram id="BPMNDiagram_1">
        <bpmndi:BPMNPlane id="BPMNPlane_1">
            <bpmndi:BPMNShape id="_BPMNShape_startevent1" bpmnElement="startevent1">
                <dc:Bounds x="100" y="100" width="36" height="36" />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="_BPMNShape_endevent1" bpmnElement="endevent1">
                <dc:Bounds x="236" y="100" width="36" height="36" />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNEdge id="_BPMNConnection_startevent1-endevent1" bpmnElement="startevent1-endevent1">
                <di:waypoint xsi:type="dc:Point" x="136" y="118" />
                <di:waypoint xsi:type="dc:Point" x="236" y="118" />
            </bpmndi:BPMNEdge>
        </bpmndi:BPMNPlane>
    </bpmndi:BPMNDiagram>
</bpmn:definitions>
```
