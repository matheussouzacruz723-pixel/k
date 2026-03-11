/**
 * ========================================
 * ATLAS DA MENTE - 3D Brain Visualization
 * Three.js Premium Interactive Brain
 * Responsive Design for Desktop, Tablet, Mobile
 * ========================================
 */

(function() {
    'use strict';

    // ========================================
    // DEVICE DETECTION
    // ========================================
    function getDeviceType() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        // Consider mobile if width < 768 or in portrait mode on smaller screens
        if (width < 768 || (width < 1024 && height > width)) {
            return 'mobile';
        } else if (width < 1200) {
            return 'tablet';
        }
        return 'desktop';
    }

    // ========================================
    // CONFIGURATION
    // ========================================
    let CONFIG = {
        // Colors - Neural theme
        colors: {
            primary: 0x6366f1,
            secondary: 0x8b5cf6,
            tertiary: 0x06b6d4,
            accent: 0x22d3ee,
            background: 0x0a0a0f,
            nodeGlow: 0x6366f1,
            connection: 0x4f46e5,
            pulse: 0x8b5cf6
        },
        
        // Brain clusters with positions
        clusters: [
            {
                id: 'padroes-mentais',
                name: 'Padrões Mentais',
                description: 'Crenças e hábitos de pensamento',
                position: { x: -1.8, y: 0.8, z: 1.2 },
                color: 0xf59e0b,
                page: 'pages/cognicao.html',
                nodes: [
                    { id: 'crencas-limitantes', name: 'Crenças Limitantes', description: 'Pensamentos que limitam', page: 'topics/vieses-cognitivos.html', color: 0xd97706 },
                    { id: 'autocritica', name: 'Autocrítica', description: 'Juízo interno severo', page: 'topics/culpa.html', color: 0xb45309 },
                    { id: 'pensamento-excessivo', name: 'Pensamento Excessivo', description: 'Ruminação mental', page: 'topics/ansiedade.html', color: 0x92400e }
                ]
            },
            {
                id: 'comportamentos',
                name: 'Comportamentos',
                description: 'Ações e padrões de conduta',
                position: { x: -1.5, y: 1.8, z: -0.5 },
                color: 0x22c55e,
                page: 'pages/personalidade.html',
                nodes: [
                    { id: 'impulsividade', name: 'Impulsividade', description: 'Ações sem reflexão', page: 'topics/ansiedade.html', color: 0x16a34a },
                    { id: 'evitacao', name: 'Evitação', description: 'Fuga de situações', page: 'topics/ansiedade.html', color: 0x15803d },
                    { id: 'reatividade', name: 'Reatividade', description: 'Respostas desproporcionais', page: 'topics/raiva.html', color: 0x166534 }
                ]
            },
            {
                id: 'emocoes',
                name: 'Emoções',
                description: 'O universo dos sentimentos humanos',
                position: { x: 1.8, y: 0.8, z: 1.2 },
                color: 0xec4899,
                page: 'pages/emocoes.html',
                nodes: [
                    { id: 'ansiedade', name: 'Ansiedade', description: 'Alerta e preocupação', page: 'topics/ansiedade.html', color: 0xf97316 },
                    { id: 'medo', name: 'Medo', description: 'Emoção primária de proteção', page: 'topics/medo.html', color: 0xef4444 },
                    { id: 'raiva', name: 'Raiva', description: 'Emoção de intensidade elevada', page: 'topics/raiva.html', color: 0xdc2626 },
                    { id: 'culpa', name: 'Culpa', description: 'Sentimento de responsabilidade', page: 'topics/culpa.html', color: 0x7c3aed }
                ]
            },
            {
                id: 'trauma',
                name: 'Trauma',
                description: 'Feridas psicológicas e memórias dolorosas',
                position: { x: 0, y: -0.5, z: -2.5 },
                color: 0x8b5cf6,
                page: 'pages/trauma.html',
                nodes: [
                    { id: 'trauma-infantil', name: 'Trauma Infantil', description: 'Experiências dolorosas na infância', page: 'topics/trauma-infantil.html', color: 0xa855f7 },
                    { id: 'memoria', name: 'Memória Emocional', description: 'Memórias carregadas de emoção', page: 'topics/memoria.html', color: 0x7c3aed },
                    { id: 'autossabotagem', name: 'Autossabotagem', description: 'Padrões que impedem o sucesso', page: 'topics/vieses-cognitivos.html', color: 0x6d28d9 }
                ]
            },
            {
                id: 'relacionamentos',
                name: 'Relacionamentos',
                description: 'Vínculos e conexões humanas',
                position: { x: 2.8, y: -1.0, z: 0.5 },
                color: 0x06b6d4,
                page: 'pages/relacoes.html',
                nodes: [
                    { id: 'apego', name: 'Apego', description: 'Vínculos afetivos', page: 'topics/apego.html', color: 0x0891b2 },
                    { id: 'dependencia', name: 'Dependência Emocional', description: 'Necessidade afetiva excessiva', page: 'topics/apego.html', color: 0x0e7490 },
                    { id: 'conflitos', name: 'Conflitos', description: 'Desentendimentos e tensões', page: 'topics/manipulacao.html', color: 0x155e75 }
                ]
            }
        ],

        // Get responsive settings based on device
        getSettings: function() {
            const device = getDeviceType();
            
            const baseSettings = {
                nodeSize: { main: 0.4, secondary: 0.25 },
                connectionWidth: 0.015,
                rotationSpeed: 0.0003,
                pulseSpeed: 0.02,
                cameraDistance: 12,
                autoRotate: true,
                autoRotateSpeed: 0.3,
                enableHoverEffects: true,
                enableMouseRotation: true,
                enablePulses: true,
                particleCount: 500,
                brainOutlineOpacity: 0.2,
                glowIntensity: 1
            };
            
            if (device === 'mobile') {
                // Mobile: Simplified for performance and readability
                return {
                    ...baseSettings,
                    nodeSize: { main: 0.32, secondary: 0.2 },
                    cameraDistance: 15,
                    autoRotateSpeed: 0.1,
                    enableHoverEffects: false,
                    enableMouseRotation: false,
                    enablePulses: false,
                    particleCount: 60,
                    pulseSpeed: 0.01,
                    brainOutlineOpacity: 0.08,
                    glowIntensity: 0.5,
                    connectionOpacity: 0.15
                };
            } else if (device === 'tablet') {
                // Tablet: Balanced experience
                return {
                    ...baseSettings,
                    nodeSize: { main: 0.36, secondary: 0.22 },
                    cameraDistance: 13,
                    autoRotateSpeed: 0.2,
                    enableMouseRotation: false,
                    particleCount: 180,
                    brainOutlineOpacity: 0.12,
                    glowIntensity: 0.7,
                    connectionOpacity: 0.2
                };
            }
            
            // Desktop: Full premium experience
            return {
                ...baseSettings,
                connectionOpacity: 0.25
            };
        }
    };

    // Get initial settings
    let settings = CONFIG.getSettings();

    // ========================================
    // GLOBAL VARIABLES
    // ========================================
    let scene, camera, renderer, controls;
    let brainGroup, particlesGroup;
    let raycaster, mouse;
    let nodes = [];
    let connections = [];
    let pulses = [];
    let hoveredNode = null;
    let clock;
    let isInitialized = false;
    let tooltip;

    // ========================================
    // INITIALIZATION
    // ========================================
    function init() {
        if (isInitialized) return;
        
        // Refresh settings based on actual device
        settings = CONFIG.getSettings();
        
        clock = new THREE.Clock();
        setupScene();
        setupCamera();
        setupRenderer();
        setupControls();
        setupRaycaster();
        createBrain();
        createParticles();
        createLights();
        createTooltip();
        setupEventListeners();
        animate();
        
        isInitialized = true;
    }

    // ========================================
    // SCENE SETUP
    // ========================================
    function setupScene() {
        scene = new THREE.Scene();
        scene.background = new THREE.Color(CONFIG.colors.background);
        scene.fog = new THREE.FogExp2(CONFIG.colors.background, 0.035);
    }

    function setupCamera() {
        camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 2, settings.cameraDistance);
        camera.lookAt(0, 0, 0);
    }

    function setupRenderer() {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, settings.mobile ? 1 : 2));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.2;
        
        const container = document.getElementById('brain-container');
        if (container) {
            container.appendChild(renderer.domElement);
        }
    }

    function setupControls() {
        controls = {
            target: new THREE.Vector3(0, 0, 0),
            spherical: new THREE.Spherical(settings.cameraDistance, Math.PI / 2, 0),
            autoRotate: settings.autoRotate,
            autoRotateSpeed: settings.autoRotateSpeed,
            enableDamping: true,
            
            update: function() {
                const offset = new THREE.Vector3();
                offset.setFromSpherical(this.spherical);
                camera.position.copy(this.target).add(offset);
                camera.lookAt(this.target);
            }
        };
    }

    function setupRaycaster() {
        raycaster = new THREE.Raycaster();
        mouse = new THREE.Vector2();
    }

    // ========================================
    // BRAIN CREATION
    // ========================================
    function createBrain() {
        brainGroup = new THREE.Group();
        createBrainOutline();
        
        CONFIG.clusters.forEach((cluster, clusterIndex) => {
            createCluster(cluster, clusterIndex);
        });
        
        createClusterConnections();
        
        if (settings.enablePulses) {
            createNeuralPulses();
        }
        
        scene.add(brainGroup);
    }

    function createBrainOutline() {
        const brainPoints = [];
        const numPoints = settings.particleCount * 0.8;
        
        for (let i = 0; i < numPoints; i++) {
            const u = Math.random() * Math.PI * 2;
            const v = Math.random() * Math.PI;
            
            const brainLength = 5.5;
            const brainWidth = 4.0;
            const brainHeight = 3.2;
            
            let r = 1.0;
            const fissureEffect = 0.08 * Math.exp(-Math.pow(u, 2) / 2);
            const frontal = 0.12 * Math.max(0, Math.cos(u - 0.4));
            const occipital = 0.1 * Math.max(0, Math.cos(u + Math.PI * 0.6));
            const temporal = 0.08 * Math.max(0, -Math.sin(u));
            
            r = r + fissureEffect + frontal + occipital + temporal;
            
            let x = brainWidth * r * Math.sin(v) * Math.cos(u);
            let y = brainHeight * r * Math.cos(v) * 0.75;
            let z = brainLength * r * Math.sin(v) * Math.sin(u) * 0.65;
            
            x += (Math.random() - 0.5) * 0.25;
            y += (Math.random() - 0.5) * 0.25;
            z += (Math.random() - 0.5) * 0.25;
            
            brainPoints.push(x, y, z);
        }
        
        const brainGeometry = new THREE.BufferGeometry();
        brainGeometry.setAttribute('position', new THREE.Float32BufferAttribute(brainPoints, 3));
        
        const brainMaterial = new THREE.PointsMaterial({
            color: 0x3d3d5c,
            size: 0.1,
            transparent: true,
            opacity: settings.brainOutlineOpacity,
            sizeAttenuation: true,
            blending: THREE.AdditiveBlending
        });
        
        const brainOutline = new THREE.Points(brainGeometry, brainMaterial);
        brainGroup.add(brainOutline);
        
        // Simplified halo for mobile
        if (getDeviceType() !== 'mobile') {
            const haloGeometry = new THREE.SphereGeometry(5, 32, 32);
            const haloMaterial = new THREE.MeshBasicMaterial({
                color: 0x1a1a2e,
                transparent: true,
                opacity: 0.04,
                side: THREE.BackSide
            });
            const halo = new THREE.Mesh(haloGeometry, haloMaterial);
            halo.scale.set(1.1, 0.75, 0.8);
            brainGroup.add(halo);
        }
    }

    function createCluster(cluster, clusterIndex) {
        const mainNode = createNode(
            cluster.position,
            settings.nodeSize.main,
            cluster.color,
            cluster.id,
            cluster.name,
            cluster.description,
            cluster.page,
            true
        );
        
        mainNode.userData.isMain = true;
        mainNode.userData.clusterId = cluster.id;
        brainGroup.add(mainNode);
        nodes.push(mainNode);
        
        const nodeCount = cluster.nodes.length;
        const radius = 1.2;
        
        cluster.nodes.forEach((nodeData, i) => {
            const angle = (i / nodeCount) * Math.PI * 2 + (clusterIndex * 0.5);
            const x = cluster.position.x + Math.cos(angle) * radius;
            const y = cluster.position.y + Math.sin(angle * 0.5) * 0.5;
            const z = cluster.position.z + Math.sin(angle) * radius * 0.5;
            
            const secondaryNode = createNode(
                { x, y, z },
                settings.nodeSize.secondary,
                nodeData.color,
                nodeData.id,
                nodeData.name,
                nodeData.description,
                nodeData.page,
                false
            );
            
            secondaryNode.userData.isMain = false;
            secondaryNode.userData.clusterId = cluster.id;
            
            brainGroup.add(secondaryNode);
            nodes.push(secondaryNode);
            
            createConnection(mainNode, secondaryNode, cluster.color);
        });
    }

    function createNode(position, size, color, id, name, description, page, isMain) {
        const geometry = new THREE.SphereGeometry(size, isMain ? 32 : 24, isMain ? 32 : 24);
        const material = new THREE.MeshStandardMaterial({
            color: color,
            emissive: color,
            emissiveIntensity: isMain ? 0.4 * settings.glowIntensity : 0.25 * settings.glowIntensity,
            metalness: 0.3,
            roughness: 0.4,
            transparent: true,
            opacity: 0.9
        });
        
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.set(position.x, position.y, position.z);
        
        // Glow effect - reduced for mobile
        const glowSize = isMain ? 1.8 : 1.6;
        const glowOpacity = (isMain ? 0.15 : 0.08) * settings.glowIntensity;
        
        const glowGeometry = new THREE.SphereGeometry(size * glowSize, 24, 24);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: glowOpacity,
            side: THREE.BackSide
        });
        
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        sphere.add(glow);
        
        sphere.userData = {
            id: id,
            name: name,
            description: description,
            page: page,
            isMain: isMain,
            originalScale: size,
            originalColor: color,
            originalEmissive: isMain ? 0.4 : 0.25,
            baseY: position.y,
            pulseOffset: Math.random() * Math.PI * 2
        };
        
        return sphere;
    }

    function createConnection(node1, node2, color) {
        const start = node1.position;
        const end = node2.position;
        
        const midPoint = new THREE.Vector3(
            (start.x + end.x) / 2,
            (start.y + end.y) / 2 + 0.3,
            (start.z + end.z) / 2
        );
        
        const curve = new THREE.QuadraticBezierCurve3(start, midPoint, end);
        const points = curve.getPoints(16);
        
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
            color: color,
            transparent: true,
            opacity: settings.connectionOpacity || 0.25,
            linewidth: 1
        });
        
        const line = new THREE.Line(geometry, material);
        
        line.userData = {
            node1: node1,
            node2: node2,
            color: color,
            originalOpacity: settings.connectionOpacity || 0.25,
            curve: curve
        };
        
        brainGroup.add(line);
        connections.push(line);
    }

    function createClusterConnections() {
        CONFIG.clusters.forEach((cluster, i) => {
            CONFIG.clusters.slice(i + 1).forEach(otherCluster => {
                const dist = Math.sqrt(
                    Math.pow(cluster.position.x - otherCluster.position.x, 2) +
                    Math.pow(cluster.position.y - otherCluster.position.y, 2) +
                    Math.pow(cluster.position.z - otherCluster.position.z, 2)
                );
                
                if (dist < 4.5) {
                    const node1 = nodes.find(n => n.userData.id === cluster.id);
                    const node2 = nodes.find(n => n.userData.id === otherCluster.id);
                    
                    if (node1 && node2) {
                        createConnection(node1, node2, CONFIG.colors.connection);
                    }
                }
            });
        });
    }

    // ========================================
    // NEURAL PULSES
    // ========================================
    function createNeuralPulses() {
        connections.forEach((conn, index) => {
            if (index % 2 === 0) {
                createPulseOnConnection(conn);
            }
        });
    }

    function createPulseOnConnection(connection) {
        const curve = connection.userData.curve;
        
        const pulseGeometry = new THREE.SphereGeometry(0.05, 12, 12);
        const pulseMaterial = new THREE.MeshBasicMaterial({
            color: connection.userData.color,
            transparent: true,
            opacity: 0.7
        });
        
        const pulse = new THREE.Mesh(pulseGeometry, pulseMaterial);
        
        pulse.userData = {
            curve: curve,
            progress: Math.random(),
            speed: settings.pulseSpeed * (0.5 + Math.random() * 0.5)
        };
        
        brainGroup.add(pulse);
        pulses.push(pulse);
    }

    // ========================================
    // PARTICLES
    // ========================================
    function createParticles() {
        particlesGroup = new THREE.Group();
        
        const particleCount = settings.particleCount;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        
        const colorOptions = [
            new THREE.Color(CONFIG.colors.primary),
            new THREE.Color(CONFIG.colors.secondary),
            new THREE.Color(CONFIG.colors.tertiary),
            new THREE.Color(CONFIG.colors.accent)
        ];
        
        for (let i = 0; i < particleCount; i++) {
            const radius = 7 + Math.random() * 6;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            
            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = radius * Math.cos(phi);
            
            const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        const material = new THREE.PointsMaterial({
            size: 0.04,
            vertexColors: true,
            transparent: true,
            opacity: 0.5,
            sizeAttenuation: true,
            blending: THREE.AdditiveBlending
        });
        
        const particles = new THREE.Points(geometry, material);
        particlesGroup.add(particles);
        
        scene.add(particlesGroup);
    }

    // ========================================
    // LIGHTING
    // ========================================
    function createLights() {
        const ambient = new THREE.AmbientLight(0x404040, 0.5);
        scene.add(ambient);
        
        const directional = new THREE.DirectionalLight(0xffffff, 0.8);
        directional.position.set(5, 10, 7);
        scene.add(directional);
        
        // Reduced lights for mobile
        if (getDeviceType() !== 'mobile') {
            const colors = [CONFIG.colors.primary, CONFIG.colors.secondary, CONFIG.colors.tertiary];
            const positions = [
                { x: -5, y: 3, z: 3 },
                { x: 5, y: 3, z: 3 },
                { x: 0, y: -3, z: 5 }
            ];
            
            positions.forEach((pos, i) => {
                const light = new THREE.PointLight(colors[i], 0.5, 15);
                light.position.set(pos.x, pos.y, pos.z);
                scene.add(light);
            });
        }
    }

    // ========================================
    // TOOLTIP
    // ========================================
    function createTooltip() {
        tooltip = document.createElement('div');
        tooltip.className = 'brain-tooltip';
        tooltip.innerHTML = `
            <div class="tooltip-content">
                <h3 class="tooltip-title"></h3>
                <p class="tooltip-description"></p>
            </div>
        `;
        tooltip.style.cssText = `
            position: fixed;
            pointer-events: none;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.2s ease;
            transform: translateY(5px);
        `;
        
        document.body.appendChild(tooltip);
        
        addTooltipStyles();
    }

    function showTooltip(node, x, y) {
        const title = tooltip.querySelector('.tooltip-title');
        const description = tooltip.querySelector('.tooltip-description');
        
        title.textContent = node.userData.name;
        description.textContent = node.userData.description;
        
        // Adjust position for mobile
        const offsetX = getDeviceType() === 'mobile' ? 10 : 15;
        const offsetY = getDeviceType() === 'mobile' ? -50 : 15;
        
        tooltip.style.left = (x + offsetX) + 'px';
        tooltip.style.top = (y + offsetY) + 'px';
        tooltip.style.opacity = '1';
        tooltip.style.transform = 'translateY(0)';
    }

    function hideTooltip() {
        tooltip.style.opacity = '0';
    }

    // ========================================
    // EVENT LISTENERS
    // ========================================
    function setupEventListeners() {
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('touchstart', onTouchStart, { passive: false });
        window.addEventListener('touchmove', onTouchMove, { passive: false });
        window.addEventListener('click', onClick);
        window.addEventListener('resize', onResize);
        
        addTooltipStyles();
    }

    function onMouseMove(event) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        
        handleIntersection(event.clientX, event.clientY);
        
        // Only allow mouse rotation on desktop
        if (settings.enableMouseRotation && !hoveredNode && event.movementX) {
            controls.spherical.theta += event.movementX * 0.0005;
            controls.spherical.phi += event.movementY * 0.0005;
            controls.spherical.phi = Math.max(0.5, Math.min(Math.PI - 0.5, controls.spherical.phi));
        }
    }

    function onTouchStart(event) {
        if (event.touches.length === 1) {
            event.preventDefault();
            const touch = event.touches[0];
            mouse.x = (touch.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(touch.clientY / window.innerHeight) * 2 + 1;
            handleIntersection(touch.clientX, touch.clientY);
        }
    }

    function onTouchMove(event) {
        if (event.touches.length === 1 && !hoveredNode) {
            const touch = event.touches[0];
            controls.spherical.theta += touch.movementX * 0.002;
            controls.spherical.phi += touch.movementY * 0.002;
            controls.spherical.phi = Math.max(0.5, Math.min(Math.PI - 0.5, controls.spherical.phi));
        }
    }

    function handleIntersection(x, y) {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(nodes);
        
        if (intersects.length > 0) {
            const node = intersects[0].object;
            
            if (hoveredNode !== node) {
                if (hoveredNode) resetNode(hoveredNode);
                
                hoveredNode = node;
                if (settings.enableHoverEffects) {
                    highlightNode(node);
                    highlightConnections(node);
                }
                showTooltip(node, x, y);
                document.body.style.cursor = 'pointer';
            } else {
                showTooltip(node, x, y);
            }
        } else {
            if (hoveredNode) {
                resetNode(hoveredNode);
                resetConnections();
                hoveredNode = null;
                hideTooltip();
                document.body.style.cursor = 'default';
            }
        }
    }

    function onClick(event) {
        if (hoveredNode && hoveredNode.userData.page) {
            window.location.href = hoveredNode.userData.page;
        }
    }

    function onResize() {
        // Refresh settings on resize
        const oldDevice = getDeviceType();
        settings = CONFIG.getSettings();
        const newDevice = getDeviceType();
        
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        camera.position.z = settings.cameraDistance;
        controls.spherical.radius = settings.cameraDistance;
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // ========================================
    // NODE HIGHLIGHTING
    // ========================================
    function highlightNode(node) {
        const data = node.userData;
        node.scale.setScalar(1.4);
        
        if (node.material) {
            node.material.emissiveIntensity = data.originalEmissive * 2.5;
        }
        
        node.children.forEach(child => {
            if (child.material && child.material.opacity !== undefined) {
                child.material.opacity *= 2;
            }
        });
        
        nodes.forEach(n => {
            if (n !== node && n.userData.clusterId === data.clusterId) {
                n.scale.setScalar(1.15);
                if (n.material) {
                    n.material.emissiveIntensity = n.userData.originalEmissive * 1.3;
                }
            } else if (n !== node) {
                if (n.material) n.material.opacity = 0.35;
            }
        });
    }

    function resetNode(node) {
        const data = node.userData;
        node.scale.setScalar(1);
        
        if (node.material) {
            node.material.emissiveIntensity = data.originalEmissive;
        }
        
        node.children.forEach(child => {
            if (child.material && child.material.opacity !== undefined) {
                child.material.opacity = (data.isMain ? 0.15 : 0.08) * settings.glowIntensity;
            }
        });
    }

    function highlightConnections(node) {
        const nodeId = node.userData.id;
        
        connections.forEach(conn => {
            const connData = conn.userData;
            const isConnected = 
                connData.node1.userData.id === nodeId || 
                connData.node2.userData.id === nodeId ||
                connData.node1.userData.clusterId === node.userData.clusterId ||
                connData.node2.userData.clusterId === node.userData.clusterId;
            
            conn.material.opacity = isConnected ? 0.7 : 0.03;
        });
    }

    function resetConnections() {
        connections.forEach(conn => {
            conn.material.opacity = conn.userData.originalOpacity;
        });
        
        nodes.forEach(n => {
            if (n.material) n.material.opacity = 0.9;
        });
    }

    // ========================================
    // ANIMATION LOOP
    // ========================================
    function animate() {
        requestAnimationFrame(animate);
        
        const time = clock.getElapsedTime();
        
        controls.update();
        
        if (!hoveredNode && controls.autoRotate) {
            controls.spherical.theta += 0.0008 * controls.autoRotateSpeed;
        }
        
        // Subtle floating animation - reduced on mobile
        const floatSpeed = getDeviceType() === 'mobile' ? 0.3 : 0.5;
        nodes.forEach(node => {
            if (node !== hoveredNode) {
                const offset = node.userData.pulseOffset || 0;
                node.position.y = node.userData.baseY + Math.sin(time * floatSpeed + offset) * 0.08;
            }
        });
        
        // Animate pulses
        if (settings.enablePulses && pulses.length > 0) {
            pulses.forEach(pulse => {
                pulse.userData.progress += pulse.userData.speed;
                if (pulse.userData.progress > 1) pulse.userData.progress = 0;
                
                const point = pulse.userData.curve.getPoint(pulse.userData.progress);
                pulse.position.copy(point);
            });
        }
        
        // Rotate particles slowly - reduced on mobile
        if (particlesGroup && getDeviceType() !== 'mobile') {
            particlesGroup.rotation.y += 0.00015;
        }
        
        renderer.render(scene, camera);
    }

    // ========================================
    // STYLES
    // ========================================
    function addTooltipStyles() {
        if (document.getElementById('brain-tooltip-style')) return;
        
        const style = document.createElement('style');
        style.id = 'brain-tooltip-style';
        style.textContent = `
            .brain-tooltip {
                background: rgba(15, 15, 25, 0.95);
                border: 1px solid rgba(99, 102, 241, 0.4);
                border-radius: 10px;
                padding: 12px 16px;
                max-width: 220px;
                backdrop-filter: blur(10px);
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
            }
            
            .brain-tooltip .tooltip-title {
                font-family: 'Sora', sans-serif;
                font-size: 0.95rem;
                font-weight: 600;
                color: #f8fafc;
                margin: 0 0 6px 0;
            }
            
            .brain-tooltip .tooltip-description {
                font-family: 'Inter', sans-serif;
                font-size: 0.8rem;
                color: #94a3b8;
                margin: 0;
                line-height: 1.4;
            }
            
            @media (max-width: 768px) {
                .brain-tooltip {
                    padding: 10px 14px;
                    max-width: 180px;
                }
                .brain-tooltip .tooltip-title {
                    font-size: 0.85rem;
                }
                .brain-tooltip .tooltip-description {
                    font-size: 0.75rem;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ========================================
    // PUBLIC API
    // ========================================
    window.BrainVisualization = {
        init: init,
        CONFIG: CONFIG,
        getNodes: () => nodes,
        getConnections: () => connections
    };

    // Auto-init
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
